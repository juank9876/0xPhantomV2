'use client';

import { StickySidebarLayout, ParallaxSection } from '@/components/StickySidebarLayout';
import { Button } from '@/components/ui/button';
import { Home, Info, Mail, Settings, User, FileText, Layers, Zap } from 'lucide-react';

export default function StickySidebarDemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <StickySidebarLayout
        sidebarPosition="left"
        sidebarWidth="350px"
        gap="3rem"
        className="max-w-7xl mx-auto px-6 py-12"
        enableParallax={true}
        parallaxSpeed={0.3}
        sidebar={
          <div className="flex flex-col h-full justify-between p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div>
              <h2 className="text-3xl font-bold mb-2">0xPhantom</h2>
              <p className="text-sm text-muted-foreground mb-8">
                Sticky Sidebar Demo
              </p>
              
              <nav className="space-y-2">
                <a href="#intro" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors">
                  <Home className="w-5 h-5" />
                  <span>Introduction</span>
                </a>
                <a href="#features" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors">
                  <Layers className="w-5 h-5" />
                  <span>Features</span>
                </a>
                <a href="#how-it-works" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors">
                  <Zap className="w-5 h-5" />
                  <span>How It Works</span>
                </a>
                <a href="#docs" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors">
                  <FileText className="w-5 h-5" />
                  <span>Documentation</span>
                </a>
                <a href="#about" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors">
                  <Info className="w-5 h-5" />
                  <span>About</span>
                </a>
                <a href="#contact" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>Contact</span>
                </a>
              </nav>
            </div>
            
            <div className="space-y-3">
              <Button className="w-full" size="lg">
                Get Started
              </Button>
              <Button className="w-full" variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        }
      >
        <div className="space-y-16">
          <ParallaxSection>
            <section id="intro" className="py-12">
              <h1 className="text-5xl font-bold mb-6">Sticky Sidebar Layout</h1>
              <p className="text-xl text-muted-foreground mb-8">
                This is the effect you were looking for! The sidebar on the left remains fixed 
                while you scroll through the content. This is commonly used for table of contents, 
                navigation menus, or any persistent UI element.
              </p>
              <div className="prose prose-invert max-w-none">
                <p>
                  As you scroll down this page, notice how the sidebar stays in place. This creates 
                  a better user experience by keeping important navigation or information always visible.
                </p>
                <p>
                  The implementation uses GSAP's ScrollTrigger with the <code>pin</code> property to 
                  achieve this effect. The sidebar is pinned to the viewport while the content flows naturally.
                </p>
              </div>
            </section>
          </ParallaxSection>

          <ParallaxSection>
            <section id="features" className="py-12">
              <h2 className="text-4xl font-bold mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Layers,
                    title: 'Sticky Sidebar',
                    description: 'Sidebar remains fixed while content scrolls',
                  },
                  {
                    icon: Zap,
                    title: 'Parallax Effect',
                    description: 'Optional parallax animation on content sections',
                  },
                  {
                    icon: Settings,
                    title: 'Configurable',
                    description: 'Customize position, width, gap, and more',
                  },
                  {
                    icon: User,
                    title: 'Responsive',
                    description: 'Works great on all screen sizes',
                  },
                ].map((feature, i) => (
                  <div key={i} className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <feature.icon className="w-10 h-10 mb-4 text-purple-400" />
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </ParallaxSection>

          <ParallaxSection>
            <section id="how-it-works" className="py-12">
              <h2 className="text-4xl font-bold mb-6">How It Works</h2>
              <div className="space-y-6">
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-2xl font-bold mb-3">1. GSAP ScrollTrigger</h3>
                  <p className="text-muted-foreground">
                    The component uses GSAP's ScrollTrigger plugin to pin the sidebar element 
                    when it reaches the top of the viewport.
                  </p>
                </div>
                
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-2xl font-bold mb-3">2. Grid Layout</h3>
                  <p className="text-muted-foreground">
                    CSS Grid is used to create a two-column layout with configurable widths 
                    and gaps between the sidebar and content.
                  </p>
                </div>
                
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-2xl font-bold mb-3">3. Parallax (Optional)</h3>
                  <p className="text-muted-foreground">
                    Content sections can have a subtle parallax effect for added visual interest 
                    as you scroll through the page.
                  </p>
                </div>
              </div>
            </section>
          </ParallaxSection>

          <ParallaxSection>
            <section id="docs" className="py-12">
              <h2 className="text-4xl font-bold mb-6">Documentation</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg mb-4">
                  The <code>StickySidebarLayout</code> component accepts the following props:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>sidebar</strong>: ReactNode - Content for the sticky sidebar</li>
                  <li><strong>children</strong>: ReactNode - Main content that scrolls</li>
                  <li><strong>sidebarPosition</strong>: 'left' | 'right' - Position of sidebar (default: 'left')</li>
                  <li><strong>sidebarWidth</strong>: string - Width of sidebar (default: '400px')</li>
                  <li><strong>gap</strong>: string - Gap between sidebar and content (default: '2rem')</li>
                  <li><strong>enableParallax</strong>: boolean - Enable parallax effect (default: false)</li>
                  <li><strong>parallaxSpeed</strong>: number - Speed of parallax (default: 0.5)</li>
                </ul>
              </div>
            </section>
          </ParallaxSection>

          <ParallaxSection>
            <section id="about" className="py-12">
              <h2 className="text-4xl font-bold mb-6">About This Effect</h2>
              <p className="text-xl text-muted-foreground mb-6">
                This sticky sidebar layout is perfect for:
              </p>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Blog posts with table of contents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Documentation pages with navigation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>E-commerce product pages with filters</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Dashboard layouts with persistent controls</span>
                </li>
              </ul>
            </section>
          </ParallaxSection>

          <ParallaxSection>
            <section id="contact" className="py-12 mb-24">
              <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Ready to implement this effect in your project? Let's make it happen!
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Us
                </Button>
                <Button size="lg" variant="outline">
                  View on GitHub
                </Button>
              </div>
            </section>
          </ParallaxSection>
        </div>
      </StickySidebarLayout>
    </div>
  );
}
