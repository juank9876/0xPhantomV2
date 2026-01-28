import { Button } from "@/components/ui/button";

export default function Growth() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/Background_oxphantom.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-slate-800/60"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Find the plan that{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              powers your growth
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-12 text-pretty max-w-2xl mx-auto">
            Keep players coming back
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            >
              Contact Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-400 text-white hover:bg-gray-800/50 hover:border-gray-300 bg-transparent transition-all duration-300 hover:shadow-md backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Growth metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">10x</div>
            <div className="text-gray-300">Faster Development</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">70%</div>
            <div className="text-gray-300">Higher Conversion</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300">Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
