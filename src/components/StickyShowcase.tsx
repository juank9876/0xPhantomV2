'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@/hooks/useGSAP';

interface StickyShowcaseProps {
  sections: {
    id: string;
    title: string;
    description: string;
    content: React.ReactNode;
    background?: string;
  }[];
  variant?: 'default' | 'stacking' | 'reveal';
}

export function StickyShowcase({ sections, variant = 'default' }: StickyShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(({ gsap, ScrollTrigger }) => {
    if (!containerRef.current) return;

    const sectionElements = containerRef.current.querySelectorAll('.sticky-showcase-section');

    sectionElements.forEach((section, index) => {
      const isLast = index === sectionElements.length - 1;

      if (variant === 'default') {
        ScrollTrigger.create({
          trigger: section,
          start: 'top top',
          end: isLast ? 'bottom bottom' : 'bottom top',
          pin: !isLast,
          pinSpacing: false,
          anticipatePin: 1,
        });

        if (!isLast) {
          gsap.to(section, {
            scale: 0.95,
            opacity: 0.8,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          });
        }
      } else if (variant === 'stacking') {
        const zIndex = sectionElements.length - index;
        (section as HTMLElement).style.zIndex = zIndex.toString();

        ScrollTrigger.create({
          trigger: section,
          start: 'top top',
          end: () => `+=${(section as HTMLElement).offsetHeight * 2}`,
          pin: !isLast,
          pinSpacing: false,
          anticipatePin: 1,
        });

        if (!isLast) {
          gsap.to(section, {
            scale: 0.9,
            y: -50,
            opacity: 0.6,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
            },
          });
        }
      } else if (variant === 'reveal') {
        ScrollTrigger.create({
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          pin: !isLast,
          pinSpacing: false,
        });

        const content = section.querySelector('.sticky-content');
        if (content && !isLast) {
          gsap.fromTo(
            content,
            { y: 100, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top center',
                end: 'top top',
                scrub: 1,
              },
            }
          );
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [variant]);

  return (
    <div ref={containerRef} className="sticky-showcase-container">
      {sections.map((section, index) => (
        <div
          key={section.id}
          className="sticky-showcase-section relative"
          style={{
            minHeight: '100vh',
            background: section.background || 'transparent',
          }}
        >
          <div className="sticky-content h-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl w-full">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                {section.title}
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl mb-12 opacity-80">
                {section.description}
              </p>
              <div className="content-area">{section.content}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
