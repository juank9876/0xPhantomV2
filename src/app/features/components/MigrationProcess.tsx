import { Check, X, AlertTriangle, ArrowBigRight, TriangleAlert } from "lucide-react";

export default function MigrationProcess() {
    const importedItems = [
        "Posts and pages (text, images, metadata)",
        "Affiliate links and tracking codes",
        "Categories, tags, and URL structure",
        "SEO metadata (titles, descriptions)",
    ];

    const notImportedItems = [
        "Your WordPress theme/design",
        "Plugins (you won't need them)",
        "Custom code or widgets",
        "Database directly (we transform it)",
    ];

    return (
        <section className="relative bg-black  pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
                        From WordPress to Next.js
                        <br />
                        <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            in less than a week.
                        </span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/60 max-w-3xl mx-auto">
                        Whether you want to migrate 1 site or 100, we're here to help you understand if Phantom is the right fit for your network.
                    </p>
                </div>

                {/* Main Card */}
                <div className="relativ to-black/40 border border-white/10 rounded-xl sm:rounded-2xl lg:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 mb-6 sm:mb-8"
                    style={{
                        background:
                            "radial-gradient(80% 60% at 20% 0%, rgba(153, 41, 83, 0.50) 0%, rgba(153, 41, 83, 0.00) 100%)",
                    }}>

                    {/* Step Number */}
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-white/30 flex items-center justify-center flex-shrink-0">
                            <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">1</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white">
                            Import your content from WordPress
                        </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base md:text-lg text-white/70 mb-6 sm:mb-8 md:mb-10 leading-relaxed">
                        Connect Phantom to your WordPress site via a simple API connection. We pull all your posts, pages, metadata, affiliate links, and content structure. This takes a few clicks and runs automatically.
                    </p>

                    {/* Two Columns Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                        {/* What DOES get imported */}
                        <div className="bg-black/40 border border-white/10 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6">
                            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-white/10 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                </div>
                                <h4 className="text-sm sm:text-base md:text-lg font-medium text-white">
                                    What DOES get imported:
                                </h4>
                            </div>
                            <ul className="space-y-2.5 sm:space-y-3">
                                {importedItems.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 group cursor-pointer transition-all duration-300 hover:translate-x-2">
                                        <ArrowBigRight className="flex-shrink-0 w-6 h-6 text-white mt-1 transition-colors duration-300 group-hover:text-pink-400" />
                                        <p className="text-lg font-thin text-gray-100/90 leading-relaxed transition-colors duration-300 group-hover:text-white">
                                            {item}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* What does NOT get imported */}
                        <div className="bg-black/40 border border-white/10 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6">
                            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-white/10 flex items-center justify-center flex-shrink-0">
                                    <X className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                </div>
                                <h4 className="text-sm sm:text-base md:text-lg font-medium text-white">
                                    What does NOT get imported:
                                </h4>
                            </div>
                            <ul className="space-y-2.5 sm:space-y-3">
                                {notImportedItems.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 group cursor-pointer transition-all duration-300 hover:translate-x-2">
                                        <ArrowBigRight className="flex-shrink-0 w-6 h-6 text-white mt-1 transition-colors duration-300 group-hover:text-pink-400" />
                                        <p className="text-lg font-thin text-gray-100/90 leading-relaxed transition-colors duration-300 group-hover:text-white">
                                            {item}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Info Alert */}
                <div className="bg-gradient-to-r from-[#4a1a3d]/20 to-[#2d1428]/20 border border-pink-900/30 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6">
                    <div className="flex flex-col items-start gap-1">
                        <div className="flex items-start gap-3 sm:gap-4">
                            <TriangleAlert className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400 flex-shrink-0 mt-0.5" />
                            <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2">
                                Expectation setting
                            </h4>
                        </div>

                        <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed">
                            Your site WILL look different after migration. That's intentional. WordPress themes leave detectable fingerprints. Our Next.js templates are faster, cleaner, and undetectable. Your content stays—your design upgrades.                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
