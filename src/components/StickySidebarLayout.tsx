'use client';

import React, { useRef, ReactNode } from 'react';
import { useGSAP } from '@/hooks/useGSAP';

interface StickySidebarLayoutProps {
  sidebar: ReactNode;
  children: ReactNode;
  sidebarPosition?: 'left' | 'right';
  sidebarWidth?: string;
  gap?: string;
  className?: string;
  sidebarClassName?: string;
  contentClassName?: string;
  enableParallax?: boolean;
  parallaxSpeed?: number;
}

export function StickySidebarLayout({
  sidebar,
  children,
  sidebarPosition = 'left',
  sidebarWidth = '400px',
  gap = '2rem',
  className = '',
  sidebarClassName = '',
  contentClassName = '',
  enableParallax = false,
  parallaxSpeed = 0.5,
}: StickySidebarLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(({ gsap, ScrollTrigger }) => {
    if (!containerRef.current || !sidebarRef.current || !contentRef.current) return;

    const sidebar = sidebarRef.current;
    const content = contentRef.current;
    const container = containerRef.current;

    ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: 'bottom bottom',
      pin: sidebar,
      pinSpacing: false,
      anticipatePin: 1,
    });

    if (enableParallax) {
      const sections = content.querySelectorAll('.parallax-section');
      sections.forEach((section) => {
        gsap.to(section, {
          y: -100 * parallaxSpeed,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === container || trigger.vars.trigger === sidebar) {
          trigger.kill();
        }
      });
    };
  }, [enableParallax, parallaxSpeed]);

  const layoutStyle = {
    display: 'grid',
    gridTemplateColumns: sidebarPosition === 'left' 
      ? `${sidebarWidth} 1fr` 
      : `1fr ${sidebarWidth}`,
    gap: gap,
    alignItems: 'start',
  };

  return (
    <div 
      ref={containerRef} 
      className={`sticky-sidebar-layout ${className}`}
      style={layoutStyle}
    >
      {sidebarPosition === 'left' && (
        <>
          <div 
            ref={sidebarRef} 
            className={`sticky-sidebar ${sidebarClassName}`}
            style={{ height: '100vh', position: 'relative' }}
          >
            {sidebar}
          </div>
          <div ref={contentRef} className={`sticky-content ${contentClassName}`}>
            {children}
          </div>
        </>
      )}
      
      {sidebarPosition === 'right' && (
        <>
          <div ref={contentRef} className={`sticky-content ${contentClassName}`}>
            {children}
          </div>
          <div 
            ref={sidebarRef} 
            className={`sticky-sidebar ${sidebarClassName}`}
            style={{ height: '100vh', position: 'relative' }}
          >
            {sidebar}
          </div>
        </>
      )}
    </div>
  );
}

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
}

export function ParallaxSection({ children, className = '' }: ParallaxSectionProps) {
  return (
    <div className={`parallax-section ${className}`}>
      {children}
    </div>
  );
}
