import { Button } from "@/components/ui/button";

export default function Showcase() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
            The only affiliate platform{" "}
            <span className="text-white">that does it all.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create, manage, and scale your affiliate listings with our unique
            listing plugin. <br />
            With advanced tracking and customization, everything you need in one
            platform.
          </p>

          {/* Example image */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-600/30">
                <img
                  src="/brandlisty.png"
                  alt="Example of affiliate platform design"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800/50 bg-transparent rounded-full px-6 py-2"
          >
            Learn more →
          </Button>
        </div>
      </div>
    </section>
  );
}
