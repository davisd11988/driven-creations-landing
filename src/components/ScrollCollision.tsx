'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollCollision() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Scrub video playback mapped to scroll position
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const unsubscribe = scrollYProgress.on('change', (progress) => {
      if (video.duration && !isNaN(video.duration)) {
        video.currentTime = progress * video.duration;
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  // Text visible immediately and stays through most of the scroll
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.85, 0.95],
    [0, 1, 1, 0]
  );

  const textScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.97, 1, 0.97]
  );

  return (
    <div id="collision" ref={containerRef} className="h-[150vh] relative">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Video Element */}
        <video
          ref={videoRef}
          src="/videos/drive_deadline_clash_purple.mp4"
          poster="/images/drive_deadline_keyed_poster.jpg"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45 z-[5]" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 z-10" />

        {/* Text Content Overlay — visible almost immediately */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 text-center"
          style={{ opacity: textOpacity, scale: textScale }}
        >
          <p className="text-brand-purple-light text-sm uppercase tracking-[0.2em] mb-4">
            The Clash
          </p>
          <h2 className="font-display font-bold text-5xl md:text-7xl text-white">
            Drive vs. Deadline
          </h2>
          <p className="text-text-secondary text-lg mt-4 max-w-xl">
            One fights for craft. The other feeds on compromise.
            Only your brand decides who wins.
          </p>
        </motion.div>

        {/* Scroll progress indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.05, 0.85, 0.95], [1, 0.6, 0.6, 0]),
          }}
        >
          <span className="text-white/40 text-xs uppercase tracking-widest">
            Scroll to watch
          </span>
          <div className="w-[2px] h-8 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="w-full bg-brand-purple rounded-full"
              style={{
                height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
