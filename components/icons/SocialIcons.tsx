/* Brand/social icons — lucide-react ships UI icons only, no brand marks,
   so these are hand-drawn single-path SVGs matching the site's existing icon style. */

type IconProps = { className?: string };

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v6h3v-6h2.5l.5-3H13v-2c0-.6.4-1 1-1z" />
    </svg>
  );
}

export function XIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M18 3h3l-7 8 8 10h-6l-5-6-5 6H3l8-9L3 3h6l4 5 5-5z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12 2c-2.7 0-3.05.01-4.12.06-1.06.05-1.79.22-2.43.46a4.9 4.9 0 00-1.77 1.15 4.9 4.9 0 00-1.15 1.77c-.24.64-.41 1.37-.46 2.43C2.01 8.95 2 9.3 2 12s.01 3.05.06 4.12c.05 1.06.22 1.79.46 2.43a4.9 4.9 0 001.15 1.77 4.9 4.9 0 001.77 1.15c.64.24 1.37.41 2.43.46C8.95 21.99 9.3 22 12 22s3.05-.01 4.12-.06c1.06-.05 1.79-.22 2.43-.46a4.9 4.9 0 001.77-1.15 4.9 4.9 0 001.15-1.77c.24-.64.41-1.37.46-2.43.05-1.07.06-1.42.06-4.12s-.01-3.05-.06-4.12c-.05-1.06-.22-1.79-.46-2.43a4.9 4.9 0 00-1.15-1.77 4.9 4.9 0 00-1.77-1.15c-.64-.24-1.37-.41-2.43-.46C15.05 2.01 14.7 2 12 2zm0 1.8c2.67 0 2.99.01 4.04.06.97.04 1.5.2 1.85.34.47.18.8.4 1.15.75.35.35.57.68.75 1.15.14.35.3.88.34 1.85.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.04.97-.2 1.5-.34 1.85-.18.47-.4.8-.75 1.15-.35.35-.68.57-1.15.75-.35.14-.88.3-1.85.34-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-.97-.04-1.5-.2-1.85-.34a3.1 3.1 0 01-1.15-.75 3.1 3.1 0 01-.75-1.15c-.14-.35-.3-.88-.34-1.85-.05-1.05-.06-1.37-.06-4.04s.01-2.99.06-4.04c.04-.97.2-1.5.34-1.85.18-.47.4-.8.75-1.15.35-.35.68-.57 1.15-.75.35-.14.88-.3 1.85-.34C9.01 3.81 9.33 3.8 12 3.8zm0 3.05a5.15 5.15 0 100 10.3 5.15 5.15 0 000-10.3zm0 8.5a3.35 3.35 0 110-6.7 3.35 3.35 0 010 6.7zm5.5-8.7a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
    </svg>
  );
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M16.6 5.82A4.28 4.28 0 0115.54 3h-3.1v12.4a2.59 2.59 0 11-1.83-2.47V9.78a5.71 5.71 0 105.71 5.71V9.4a7.13 7.13 0 004.07 1.29V7.57a4.28 4.28 0 01-3.8-1.75z" />
    </svg>
  );
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M23.5 7.2s-.23-1.64-.94-2.36c-.9-.95-1.91-.95-2.37-1C16.87 3.6 12 3.6 12 3.6h-.01s-4.87 0-8.18.24c-.46.05-1.47.05-2.37 1-.71.72-.94 2.36-.94 2.36S0 9.13 0 11.07v1.78c0 1.93.23 3.87.23 3.87s.23 1.64.94 2.36c.9.95 2.08.92 2.6 1.02 1.89.18 8.03.24 8.23.24 0 0 4.87-.01 8.18-.25.46-.05 1.47-.05 2.37-1 .71-.72.94-2.36.94-2.36s.23-1.93.23-3.87v-1.78c0-1.93-.23-3.87-.23-3.87zM9.55 14.8V8.4l6.27 3.2-6.27 3.2z" />
    </svg>
  );
}
