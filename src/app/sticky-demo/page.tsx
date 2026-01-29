'use client';

import { StickySection, StickySectionsContainer } from '@/components/StickySections';

export default function StickyDemoPage() {
  const sections = [
    {
      title: 'Section 1',
      subtitle: 'Scroll down to see the sticky effect',
      bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
    },
    {
      title: 'Section 2',
      subtitle: 'Each section pins while you scroll',
      bg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      color: 'white',
    },
    {
      title: 'Section 3',
      subtitle: 'Notice the scale effect',
      bg: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      color: 'white',
    },
    {
      title: 'Section 4',
      subtitle: 'Powered by GSAP ScrollTrigger',
      bg: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      color: 'white',
    },
    {
      title: 'Section 5',
      subtitle: 'Final section - no pinning',
      bg: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      color: 'white',
    },
  ];

  return (
    <div className="min-h-screen">
      <StickySectionsContainer>
        {sections.map((section, index) => (
          <StickySection
            key={index}
            backgroundColor="transparent"
            withScale={index < sections.length - 1}
            withFade={false}
            className="relative"
          >
            <div
              className="absolute inset-0 z-0"
              style={{
                background: section.bg,
              }}
            />
            <div className="relative z-10 text-center px-8">
              <h1
                className="text-6xl md:text-8xl font-bold mb-4"
                style={{ color: section.color }}
              >
                {section.title}
              </h1>
              <p
                className="text-xl md:text-2xl opacity-90"
                style={{ color: section.color }}
              >
                {section.subtitle}
              </p>
            </div>
          </StickySection>
        ))}
      </StickySectionsContainer>
    </div>
  );
}
