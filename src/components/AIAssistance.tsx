import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Brain, Rocket } from "lucide-react";

export default function AIAssistance() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900 to-pink-900/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full px-6 py-2 mb-6">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-medium">
                AI-Powered Platform
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              AI Assistance for{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                your platform
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-pretty">
              Our platform leverages Google's Gemini 2.5 Pro to help you create
              stunning affiliate sites without technical complexity. Build
              faster, smarter, and more efficiently than ever before.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-700 p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Smart Content Generation
              </h3>
              <p className="text-gray-300">
                Gemini 2.5 Pro generates compelling content and copy based on
                your specific prompts and requirements, tailored to your niche
                and target audience.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-700 p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Custom Layout Creation
              </h3>
              <p className="text-gray-300">
                Simply describe your vision and watch as AI creates custom page
                layouts and structures perfectly suited to your affiliate
                business.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-700 p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Zero Technical Complexity
              </h3>
              <p className="text-gray-300">
                No coding required. Our AI handles all technical aspects while
                you focus on strategy and growing your affiliate business.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-3xl border border-purple-500/30 p-12 backdrop-blur-sm">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to experience AI-powered affiliate marketing?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of marketers who are already using our Gemini 2.5
              Pro integration to build high-converting affiliate sites in
              minutes, not weeks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                asChild
              >
                <a href="#contact">Start Building with AI</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-400 text-white hover:bg-gray-800/50 hover:border-gray-300 bg-transparent transition-all duration-300 hover:shadow-md backdrop-blur-sm"
                asChild
              >
                <a href="#plans">View AI Features</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
