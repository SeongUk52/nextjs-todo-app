'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface GoogleAdsenseProps {
  slot: string;
  style?: React.CSSProperties;
  format?: string;
  responsive?: boolean;
}

export default function GoogleAdsense({
  slot,
  style = { display: 'block' },
  format = 'auto',
  responsive = true,
}: GoogleAdsenseProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('구글 애드센스 에러:', err);
    }
  }, []);

  return (
    <div className="w-full overflow-hidden my-4">
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-7997736575342042" // 여기에 애드센스 ID 입력
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
} 