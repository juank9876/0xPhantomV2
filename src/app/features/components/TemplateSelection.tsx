import { FileText, Trophy, BarChart3, BookOpen, Zap } from "lucide-react";

export default function TemplateSelection() {
    const templates = [
        {
            icon: FileText,
            title: "Review Pages",
            description: "Single-game, multi-section",
        },
        {
            icon: Trophy,
            title: "Top Lists",
            description: "Brand comparisons",
        },
        {
            icon: BarChart3,
            title: "Comparison Tables",
            description: "Side-by-side features",
        },
        {
            icon: BookOpen,
            title: "Guides",
            description: "How-to articles",
        },
    ];

    return (
        <section className="relative  bg-black px-4">
            <div className="max-w-7xl mx-auto">
                {/* Main Card */}
                <div
                    className="relative border border-white/10 rounded-xl sm:rounded-2xl lg:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 mb-6 sm:mb-8"
                    style={{
                        background:
                            "radial-gradient(80% 60% at 20% 0%, rgba(153, 41, 83, 0.50) 0%, rgba(153, 41, 83, 0.00) 100%)",
                    }}
                >
                    {/* Step Number */}
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-white/30 flex items-center justify-center flex-shrink-0">
                            <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">2</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white">
                            Choose one of 30 casino-specific templates
                        </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base md:text-lg text-white/70 mb-6 sm:mb-8 md:mb-10 leading-relaxed">
                        Your content is in. Now pick a professional Next.js template built specifically for casino and iGaming affiliates. These aren't generic blog themes—they're designed for review pages, brand lists, comparison tables, and guides that convert.
                    </p>

                    {/* Templates Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-8 md:mb-10">
                        {templates.map((template, index) => (
                            <div
                                key={index}
                                className="bg-black/40 border border-white/10 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 flex flex-col items-center text-center hover:border-pink-500/50 hover:bg-black/60 transition-all duration-300 group cursor-pointer"
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:from-pink-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                                    <template.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-pink-400" />
                                </div>
                                <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 sm:mb-2">
                                    {template.title}
                                </h4>
                                <p className="text-xs sm:text-sm text-white/60">
                                    {template.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Info Alert */}
                <div className="bg-gradient-to-r from-[#4a1a3d]/20 to-[#2d1428]/20 border border-pink-900/30 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6">
                    <div className="flex flex-col items-start gap-1">
                        <div className="flex items-start gap-3 sm:gap-4">
                            <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400 flex-shrink-0 mt-0.5" />
                            <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2">
                                Why 30 different templates matters
                            </h4>
                        </div>

                        <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed">
                            If you migrate 50 sites, you can distribute them across 30 designs. Google can't fingerprint your network by design patterns because each cluster of sites looks different. This is part of being invisible.                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
