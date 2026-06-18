import { NextResponse } from 'next/server';

const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/info@linksvaluers.com';

const SUBJECTS: Record<string, string> = {
  booking: 'New Valuation Booking Request — Links Valuers',
  contact: 'New Contact Enquiry — Links Valuers',
  chatbot: 'New Chatbot Lead — Links Valuers'
};

/**
 * Pings a Telegram chat instantly when TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID
 * are configured (Vercel project env vars). Best-effort — never blocks or
 * fails the lead submission if not configured or if Telegram is unreachable.
 * Setup: create a bot via @BotFather, get its token, message the bot once,
 * then fetch https://api.telegram.org/bot<token>/getUpdates to find your chat id.
 */
async function notifyTelegram(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;
  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' })
    });
  } catch {
    // Non-fatal — email delivery below is the source of truth.
  }
}

function formatTelegramMessage(type: string, data: Record<string, unknown>): string {
  const lines = [`<b>${SUBJECTS[type] ?? 'New Lead'}</b>`];
  for (const [key, value] of Object.entries(data)) {
    if (!value) continue;
    lines.push(`<b>${key}:</b> ${String(value)}`);
  }
  return lines.join('\n');
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { type, ...fields } = body as { type?: string } & Record<string, unknown>;
  const leadType = typeof type === 'string' && SUBJECTS[type] ? type : 'contact';

  const payload: Record<string, unknown> = {
    ...fields,
    _subject: SUBJECTS[leadType],
    _template: 'table',
    _captcha: 'false'
  };

  try {
    const res = await fetch(FORMSUBMIT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      throw new Error(`FormSubmit responded ${res.status}`);
    }

    // Fire instant push notification in parallel — does not block the response.
    void notifyTelegram(formatTelegramMessage(leadType, fields));

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Lead submission failed:', err);
    return NextResponse.json({ error: 'Failed to send lead' }, { status: 502 });
  }
}
