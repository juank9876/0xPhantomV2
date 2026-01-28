import Image from "next/image";

export default function AfterLaunch() {
    return (
        <section className="relative bg-black px-4">
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    After you launch: what to expect
                </h2>

                {/* Two Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
                    {/* SEO Performance Card */}
                    <div className="rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:border-gray-600 hover:shadow-lg hover:shadow-gray-900/50">
                        {/* Image */}
                        <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80">
                            <img
                                src="/after-launch/seo-performance.jpg"
                                alt="SEO Performance Analytics"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-5 sm:p-6 md:p-8">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
                                SEO Performance
                            </h3>

                            <ul className="space-y-3 sm:space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                                    <p className="text-sm sm:text-lg text-white/70 leading-relaxed">
                                        <span className="font-semibold text-white">Indexation:</span> Check Google Search Console. Next.js sites typically index faster.
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                                    <p className="text-sm sm:text-lg text-white/70 leading-relaxed">
                                        <span className="font-semibold text-white">Core Web Vitals:</span> Expect green scores (vs yellow/red on WordPress).
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                                    <p className="text-sm sm:text-lg text-white/70 leading-relaxed">
                                        <span className="font-semibold text-white">Traffic:</span> Normal to see 1-2 week dip during migration, then recovery.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Managing Your Site Card */}
                    <div className="rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:border-pink-800 hover:shadow-lg hover:shadow-pink-900/50 hover:from-pink-950/80 hover:via-purple-950/60">
                        {/* Image */}
                        <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80">
                            <img
                                src="/after-launch/managing-site.jpg"
                                alt="Managing Your Site Dashboard"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-5 sm:p-6 md:p-8">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
                                Managing Your Site
                            </h3>

                            <ul className="space-y-2">
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                                    <p className="text-sm sm:text-lg text-white/70 leading-relaxed">
                                        Backend feels like WordPress; <span className="font-semibold text-white">familiar interface.</span>
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/60  mt-2 flex-shrink-0" />
                                    <p className="text-sm sm:text-lg text-white/70 leading-relaxed">
                                        Update posts, publish content, manage links; <span className="font-semibold text-white">no code needed.</span>
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                                    <p className="text-sm sm:text-lg text-white/70 leading-relaxed">
                                        Your team can use it <span className="font-semibold text-white">immediately</span> if they know WordPress.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
