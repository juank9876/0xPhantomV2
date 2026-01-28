import FadeInView from "@/components/FadeInView";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function TimelineComparison() {
    const timelineSteps = [
        { number: 1, day: "Day 1", description: "Set up & content imported" },
        { number: 2, day: "Day 2-3", description: "Choose your template(s)" },
        { number: 3, day: "Day 3-4", description: "Content mapped to template" },
        { number: 4, day: "Day 4-5", description: "Review & staging preview" },
        { number: 5, day: "Day 7", description: "Go live on Phantom" },
    ];

    return (
        <section className="relative bg-black px-4">

            <div>
                <div className="relative w-full my-10 sm:my-12 md:my-16 lg:my-20">
                    <WavyBackground
                        speed="slow"
                        waveOpacity={1}
                        blur={15}
                        waveWidth={50}
                        className="w-full"
                    >
                        <div className="max-w-7xl mx-auto">
                            {/* Timeline Section */}
                            <div className="mb-12 sm:mb-16 md:mb-20 relative">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                                    Realistic timeline for your first site
                                </h2>

                                {/* Timeline */}
                                <div className="relative">
                                    {/* Timeline Line */}
                                    <div className="absolute top-5 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500"
                                        style={{
                                            backgroundImage: 'repeating-linear-gradient(90deg, #ec4899 0, #ec4899 10px, transparent 10px, transparent 20px)',
                                            height: '2px'
                                        }}
                                    />

                                    {/* Timeline Steps */}
                                    <div className="relative flex justify-between items-start">
                                        {timelineSteps.map((step, index) => (
                                            <div key={index} className="flex flex-col items-center" style={{ width: '20%' }}>
                                                {/* Circle */}
                                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white/30 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 mx-auto relative bg-gray-900">
                                                    <div className="absolute inset-0 rounded-full bg-indigo-500/60 blur-xl"></div>
                                                    <span className="text-white text-lg sm:text-xl font-semibold relative z-10">{step.number}</span>
                                                </div>
                                                {/* Text */}
                                                <div className="text-center">
                                                    <p className="text-xs sm:text-sm text-white/80 font-medium mb-1">
                                                        {step.day}
                                                    </p>
                                                    <p className="text-xs sm:text-sm text-white/60 leading-tight">
                                                        {step.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Wavy Background - Full Width */}


                        <div className="max-w-7xl flex lg:flex-row flex-col lg:gap-2 mx-auto items-center rounded-lg bg-black/85 backdrop-blur-sm border border-gray-700 p-3 lg:p-6 w-full">
                            <p className="text-base sm:text-xl xl:text-2xl font-light text-white text-center leading-relaxed">
                                Migrating multiple sites?
                            </p>
                            <p className="text-sm xl:text-xl font-light text-white/60 text-center lg:leading-relaxed">
                                After your first one, expect 5-10 sites per week once you know the process.
                            </p>
                        </div>
                    </WavyBackground>
                </div>
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Why Google Can't Detect Section */}
                <div className="mb-12 sm:mb-16 md:mb-20">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                        Why Google can't detect Phantom sites
                        <br />
                        <span className="font-thin">and why that protects your entire portfolio.</span>
                    </h2>
                    <p className="text-sm sm:text-base text-white/60 leading-relaxed mb-3 sm:mb-4">
                        Every WordPress site leaves the same technical signature. Google's crawlers see "wp-content/themes/", "wp-includes/", and common plugins like Yoast, WooCommerce, or Elementor.
                    </p>
                    <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                        When you run 50 or 200 casino affiliate sites on WordPress, <span className="font-light text-white/80">Google knows they're all connected,</span> even if they're on different domains. If Google decides to downrank "WordPress affiliate networks," your whole portfolio gets hit.
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
                    <FadeInView delay={0.1} direction="left">
                        <div className="relative rounded-xl md:rounded-2xl bg-gradient-to-b from-white/6 via-stone-700  to-white/6 border border-gray-700 p-6 sm:p-8 md:p-10 transition-all duration-300 hover:border-gray-600 hover:shadow-lg hover:shadow-gray-900/50 hover:-translate-y-1">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 text-center">
                                WordPress network:
                            </h3>
                            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-thin text-center mb-6 sm:mb-8">
                                200 sites
                            </p>
                            <p className="text-sm sm:text-base text-gray-300 mb-1">
                                Google detects a pattern in all of them
                            </p>
                            <hr className="mb-3 sm:mb-4 border-gray-500" />
                            <div className="bg-black/60 rounded-lg p-4 sm:p-5 md:p-6 font-mono text-xs sm:text-sm mb-4 sm:mb-6">
                                <div className="flex gap-4 mb-2">
                                    <span className="text-gray-500">1</span>
                                    <span className="text-gray-300">wp-content/</span>
                                </div>
                                <div className="flex gap-4 mb-2">
                                    <span className="text-gray-500">2</span>
                                    <span className="text-gray-300">wp-includes/</span>
                                </div>
                                <div className="flex gap-4 mb-2">
                                    <span className="text-gray-500">3</span>
                                    <span className="text-gray-300">plugins</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-gray-500">...</span>
                                </div>
                            </div>

                            <div className="bg-gray-300/10 rounded-md py-2 px-3 sm:px-4 text-center max-w-xs mx-auto">
                                <span className="text-gray-300 font-light text-xs sm:text-sm">Mass Penalty Possible</span>
                            </div>
                        </div>
                    </FadeInView>

                    <FadeInView delay={0.2} direction="right">
                        <div className="relative rounded-xl md:rounded-2xl bg-gradient-to-t border-gray-700 from-pink-950/70 via-purple-950/50 to-white/2 border p-6 sm:p-8 md:p-10 transition-all duration-300 hover:border-pink-800 hover:shadow-lg hover:shadow-pink-900/50 hover:-translate-y-1 hover:from-pink-950/80 hover:via-purple-950/60">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 text-center">
                                Phantom network:
                            </h3>
                            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-thin mb-6 sm:mb-8 text-center" >
                                200 sites
                            </p>
                            <p className="text-sm sm:text-base text-gray-300 mb-1">
                                Google sees 200 unrelated sites
                            </p>
                            <hr className="mb-3 sm:mb-4" />
                            <div className="bg-black/60 rounded-lg p-4 sm:p-5 md:p-6 font-mono text-xs sm:text-sm mb-4 sm:mb-6">
                                <div className="flex gap-4 mb-2">
                                    <span className="text-gray-500">1</span>
                                    <span className="text-gray-300">unique Next.js code 1</span>
                                </div>
                                <div className="flex gap-4 mb-2">
                                    <span className="text-gray-500">2</span>
                                    <span className="text-gray-300">unique Next.js code 2</span>
                                </div>
                                <div className="flex gap-4 mb-2">
                                    <span className="text-gray-500">...</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-gray-500">N</span>
                                    <span className="text-gray-300">unique Next.js code N</span>
                                </div>
                            </div>

                            <div className="bg-[#992953]/90 rounded-md py-2 px-3 sm:px-4 text-center max-w-xs mx-auto">
                                <span className="text-white font-medium text-xs sm:text-sm">No Mass Penalty Risk</span>
                            </div>
                        </div>
                    </FadeInView>
                </div>

                <FadeInView delay={0.2}>
                    <div className="rounded-xl border-gray-700 md:rounded-2xl bg-gradient-to-t from-[#992953]/20 via-[#411640]/50 to-[#000000]/20 border p-6 sm:p-8 md:p-10 lg:p-12 mt-5 sm:mt-6 md:mt-8 transition-all duration-300 hover:border-[#992953] hover:shadow-lg hover:shadow-[#992953]/30 hover:from-[#992953]/30 hover:via-[#411640]/60">
                        <h3 className="text-xl sm:text-2xl md:text-3xl text-white mb-3 sm:mb-4 font-thin">
                            Phantom's solution:
                        </h3>
                        <p className="text-sm sm:text-base md:text-md text-gray-200/60 leading-relaxed">
                            Phantom gives each site a hardcoded Next.js frontend. No shared folders. No plugin fingerprints. No detectable pattern.
                            Even if you migrate 500 sites, Google sees 500 independent, custom-built websites; not 500 clones of an affiliate platform. That's how you avoid mass penalties.
                        </p>
                    </div>
                </FadeInView>

            </div>
        </section>
    );
}
