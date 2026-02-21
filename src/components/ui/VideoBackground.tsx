'use client';

import { useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  className?: string;
  overlay?: boolean;
}

export default function VideoBackground({
  src,
  poster,
  className = '',
  overlay = true,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay was prevented; silent fallback
      });
    }
  }, []);

  return (
    <div className={`absolute inset-0 ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        autoPlay
        loop
        playsInline
        suppressHydrationWarning
        className="w-full h-full object-cover"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a2e]/60 via-transparent to-[#0a0a0a]/90" />
      )}
    </div>
  );
}
