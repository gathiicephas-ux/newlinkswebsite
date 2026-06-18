import Image from 'next/image';
import type { ReactNode } from 'react';

export default function AvatarCallout({ children }: { children: ReactNode }) {
  return (
    <div className="avatar-callout reveal in">
      <div className="avatar-badge__img">
        <Image src="/images/avatar/links-chatbot.png" alt="Links Valuation Assistant avatar" width={64} height={64} />
      </div>
      <p>{children}</p>
    </div>
  );
}
