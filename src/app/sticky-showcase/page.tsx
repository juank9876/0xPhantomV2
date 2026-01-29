'use client';

import { StickyShowcase } from '@/components/StickyShowcase';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Zap, Globe, Lock } from 'lucide-react';

export default function StickyShowcasePage() {
  const sections = [
    {
      id: 'hero',
      title: '0xPhantom',
      description: 'Next-generation web security platform',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 100%)',
      content: (
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <p className="text-xl mb-6 text-gray-300">
              Protect your WordPress sites with cutting-edge security technology
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <Shield className="w-8 h-8 mb-2 text-blue-400" />
              <h3 className="font-bold mb-1">Secure</h3>
              <p className="text-sm text-gray-400">Military-grade encryption</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <Zap className="w-8 h-8 mb-2 text-yellow-400" />
              <h3 className="font-bold mb-1">Fast</h3>
              <p className="text-sm text-gray-400">Lightning performance</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'security',
      title: 'Advanced Security',
      description: 'Multi-layered protection for your digital assets',
      background: 'linear-gradient(135deg, #1a1a3e 0%, #2d1b4e 100%)',
      content: (
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Lock, title: 'Encryption', desc: 'End-to-end encryption' },
            { icon: Shield, title: 'Firewall', desc: 'Advanced threat detection' },
            { icon: Globe, title: 'CDN', desc: 'Global content delivery' },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <item.icon className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'performance',
      title: 'Blazing Fast',
      description: 'Optimized for speed and performance',
      background: 'linear-gradient(135deg, #2d1b4e 0%, #1e3a5f 100%)',
      content: (
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-blue-400">99.9%</h3>
              <p className="text-xl text-gray-300">Uptime Guarantee</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 text-green-400">&lt;100ms</h3>
              <p className="text-xl text-gray-300">Response Time</p>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl">
            <p className="text-lg text-gray-300">
              Our infrastructure is built on cutting-edge technology to ensure your sites load
              instantly, anywhere in the world.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'cta',
      title: 'Ready to Get Started?',
      description: 'Join thousands of satisfied customers',
      background: 'linear-gradient(135deg, #1e3a5f 0%, #0f0f23 100%)',
      content: (
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xl mb-8 text-gray-300">
            Start protecting your WordPress sites today with our 14-day free trial
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 text-lg px-8 py-6">
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Contact Sales
            </Button>
          </div>
          <p className="mt-6 text-sm text-gray-500">No credit card required</p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <StickyShowcase sections={sections} variant="default" />
    </div>
  );
}
