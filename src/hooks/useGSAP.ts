'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useGSAP(
  callback: (context: { gsap: typeof gsap; ScrollTrigger: typeof ScrollTrigger }) => void | (() => void),
  dependencies: any[] = []
) {
  const cleanupRef = useRef<(() => void) | void>();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    cleanupRef.current = callback({ gsap, ScrollTrigger });

    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, dependencies);
}
