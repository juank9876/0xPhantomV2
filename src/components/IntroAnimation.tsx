'use client';

import { motion } from 'motion/react';
import { useEffect } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-9999 bg-black flex items-center justify-center"
      style={{ willChange: 'opacity' }}
    >
      <motion.div
        layoutId="logo-shared"
        transition={{
          duration: 3,
          ease: [0.43, 0.13, 0.23, 0.96],
          layout: { duration: 3 }
        }}
        className="w-24 h-auto sm:w-48"
        style={{ willChange: 'transform' }}
      >
        <img
          src="/logo.png"
          alt="0x-Phantom Logo"
          className="w-full h-auto"
        />
      </motion.div>
    </motion.div>
  );
}
