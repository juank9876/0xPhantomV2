'use client';

import { IntroProvider } from '@/contexts/IntroContext';
import IntroWrapper from './IntroWrapper';
import { LayoutGroup } from 'motion/react';
import { ReactNode } from 'react';

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <IntroProvider>
      <LayoutGroup>
        <IntroWrapper />
        {children}
      </LayoutGroup>
    </IntroProvider>
  );
}
