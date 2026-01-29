'use client';

import { StickySidebarLayout, ParallaxSection } from '@/components/StickySidebarLayout';
import { Clock, User } from 'lucide-react';

export default function BlogDemoPage() {
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'what-is-gsap', title: 'What is GSAP?' },
    { id: 'scrolltrigger', title: 'ScrollTrigger Plugin' },
    { id: 'implementation', title: 'Implementation' },
    { id: 'best-practices', title: 'Best Practices' },
    { id: 'conclusion', title: 'Conclusion' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Building Sticky Sidebar Layouts with GSAP
          </h1>
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>John Doe</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>10 min read</span>
            </div>
          </div>
        </header>

        <StickySidebarLayout
          sidebarPosition="right"
          sidebarWidth="280px"
          gap="4rem"
          enableParallax={false}
          sidebar={
            <div className="sticky top-8">
              <div className="p-6 bg-card rounded-xl border">
                <h3 className="font-bold text-lg mb-4">Table of Contents</h3>
                <nav>
                  <ul className="space-y-2">
                    {tableOfContents.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block py-1"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="mt-6 p-6 bg-card rounded-xl border">
                <h3 className="font-bold text-lg mb-3">About the Author</h3>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
                  <div>
                    <p className="font-semibold">John Doe</p>
                    <p className="text-xs text-muted-foreground">Web Developer</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Passionate about creating smooth web experiences with modern animations.
                </p>
              </div>
            </div>
          }
        >
          <article className="prose prose-invert max-w-none">
            <section id="introduction" className="mb-16">
              <h2 className="text-3xl font-bold mb-4">Introduction</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Sticky sidebars are a popular design pattern in modern web development. They keep 
                important navigation or information visible as users scroll through long content, 
                improving the overall user experience.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                In this article, we'll explore how to create a sticky sidebar layout using GSAP's 
                ScrollTrigger plugin. This technique is particularly useful for blog posts, 
                documentation pages, and any content-heavy websites.
              </p>
              <p className="text-lg text-muted-foreground">
                The sidebar you see on the right is a perfect example of this effect in action. 
                Notice how it stays fixed as you scroll through this content.
              </p>
            </section>

            <section id="what-is-gsap" className="mb-16">
              <h2 className="text-3xl font-bold mb-4">What is GSAP?</h2>
              <p className="text-lg text-muted-foreground mb-4">
                GSAP (GreenSock Animation Platform) is a powerful JavaScript animation library that 
                makes it easy to create high-performance animations. It's trusted by major companies 
                and has been battle-tested across millions of websites.
              </p>
              <div className="bg-card p-6 rounded-xl border my-6">
                <h3 className="text-xl font-bold mb-3">Key Benefits of GSAP:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Exceptional performance and smooth animations</li>
                  <li>• Cross-browser compatibility</li>
                  <li>• Intuitive API that's easy to learn</li>
                  <li>• Powerful plugins like ScrollTrigger</li>
                  <li>• Active community and excellent documentation</li>
                </ul>
              </div>
              <p className="text-lg text-muted-foreground">
                GSAP handles all the heavy lifting of animation timing, easing, and browser 
                inconsistencies, allowing developers to focus on creating great user experiences.
              </p>
            </section>

            <section id="scrolltrigger" className="mb-16">
              <h2 className="text-3xl font-bold mb-4">ScrollTrigger Plugin</h2>
              <p className="text-lg text-muted-foreground mb-4">
                ScrollTrigger is one of GSAP's most popular plugins. It allows you to trigger 
                animations based on scroll position, making it perfect for creating scroll-based 
                effects like sticky elements, parallax, and reveal animations.
              </p>
              <div className="bg-card p-6 rounded-xl border my-6">
                <h3 className="text-xl font-bold mb-3">ScrollTrigger Features:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Pin elements during scroll</li>
                  <li>• Scrub animations (link to scroll position)</li>
                  <li>• Snap to sections</li>
                  <li>• Callbacks at specific scroll points</li>
                  <li>• Horizontal scrolling support</li>
                </ul>
              </div>
              <p className="text-lg text-muted-foreground">
                The pin feature is what we use to create our sticky sidebar effect. It "pins" an 
                element in place while the rest of the content scrolls normally.
              </p>
            </section>

            <section id="implementation" className="mb-16">
              <h2 className="text-3xl font-bold mb-4">Implementation</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Implementing a sticky sidebar with GSAP is straightforward. Here's the basic approach:
              </p>
              
              <div className="bg-card p-6 rounded-xl border my-6">
                <h3 className="text-xl font-bold mb-3">Step 1: Setup</h3>
                <p className="text-muted-foreground mb-3">
                  First, install GSAP and import ScrollTrigger:
                </p>
                <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
                  <code>{`npm install gsap

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);`}</code>
                </pre>
              </div>

              <div className="bg-card p-6 rounded-xl border my-6">
                <h3 className="text-xl font-bold mb-3">Step 2: Create the Layout</h3>
                <p className="text-muted-foreground mb-3">
                  Use CSS Grid or Flexbox to create a two-column layout:
                </p>
                <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
                  <code>{`<div style={{ display: 'grid', gridTemplateColumns: '1fr 300px' }}>
  <main>Content here</main>
  <aside>Sidebar here</aside>
</div>`}</code>
                </pre>
              </div>

              <div className="bg-card p-6 rounded-xl border my-6">
                <h3 className="text-xl font-bold mb-3">Step 3: Apply ScrollTrigger</h3>
                <p className="text-muted-foreground mb-3">
                  Pin the sidebar element:
                </p>
                <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
                  <code>{`ScrollTrigger.create({
  trigger: container,
  start: 'top top',
  end: 'bottom bottom',
  pin: sidebar,
  pinSpacing: false,
});`}</code>
                </pre>
              </div>
            </section>

            <section id="best-practices" className="mb-16">
              <h2 className="text-3xl font-bold mb-4">Best Practices</h2>
              <p className="text-lg text-muted-foreground mb-4">
                When implementing sticky sidebars, keep these best practices in mind:
              </p>
              
              <div className="space-y-4">
                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="text-xl font-bold mb-2">1. Mobile Responsiveness</h3>
                  <p className="text-muted-foreground">
                    Consider disabling the sticky effect on mobile devices or switching to a 
                    different layout. Sticky sidebars work best on larger screens.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="text-xl font-bold mb-2">2. Performance</h3>
                  <p className="text-muted-foreground">
                    Use <code>pinSpacing: false</code> to prevent layout shifts and improve 
                    performance. Also, clean up ScrollTrigger instances when components unmount.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="text-xl font-bold mb-2">3. Accessibility</h3>
                  <p className="text-muted-foreground">
                    Ensure your sticky sidebar doesn't interfere with keyboard navigation or 
                    screen readers. Test with assistive technologies.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-xl border">
                  <h3 className="text-xl font-bold mb-2">4. Content Length</h3>
                  <p className="text-muted-foreground">
                    Make sure your main content is longer than the sidebar. Otherwise, the 
                    sticky effect won't be noticeable or useful.
                  </p>
                </div>
              </div>
            </section>

            <section id="conclusion" className="mb-16">
              <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Sticky sidebars are a powerful UX pattern that can significantly improve navigation 
                and user engagement on content-heavy pages. With GSAP's ScrollTrigger, implementing 
                this effect is both simple and performant.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                The example you're reading right now demonstrates this effect in action. The table 
                of contents on the right stays visible as you scroll, making it easy to jump to 
                different sections of the article.
              </p>
              <p className="text-lg text-muted-foreground">
                Try implementing this in your next project and see how it improves the user 
                experience. Happy coding!
              </p>
            </section>
          </article>
        </StickySidebarLayout>
      </div>
    </div>
  );
}
