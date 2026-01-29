'use client';

import React, { useRef, ReactNode } from 'react';
import { useGSAP } from '@/hooks/useGSAP';

interface StickySectionProps {
  children: ReactNode;
  className?: string;
  backgroundColor?: string;
  withScale?: boolean;
  withFade?: boolean;
}

export function StickySection({ 
  children, 
  className = '', 
  backgroundColor,
  withScale = true,
  withFade = false 
}: StickySectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(({ gsap, ScrollTrigger }) => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;

    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
      anticipatePin: 1,
    });

    if (withScale || withFade) {
      const animation: any = {};
      if (withScale) animation.scale = 0.9;
      if (withFade) animation.opacity = 0.5;

      gsap.to(section, {
        ...animation,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, [withScale, withFade]);

  return (
    <div
      ref={sectionRef}
      className={`sticky-section ${className}`}
      style={{
        backgroundColor: backgroundColor || undefined,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      {children}
    </div>
  );
}

interface StickySectionsContainerProps {
  children: ReactNode;
  className?: string;
}

export function StickySectionsContainer({ children, className = '' }: StickySectionsContainerProps) {
  return (
    <div className={`sticky-sections-container ${className}`}>
      {children}
    </div>
  );
}
