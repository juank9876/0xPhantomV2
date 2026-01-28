'use client';

import Image from 'next/image';

export default function AffiliateShowcase() {
    return (
        <section className="w-full bg-black pt-12 md:pt-20 px-4 md:px-6 lg:px-12 xl:px-20">
            {/* Header */}
            <div className="max-w-[1400px] mx-auto mb-8 md:mb-12 flex flex-col md:flex-row items-start md:items-start justify-between gap-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight max-w-3xl">
                    The affiliate platform
                    <br />
                    that does it all.
                </h2>
                <button className="hidden md:block px-6 md:px-8 py-2.5 md:py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors text-sm md:text-base whitespace-nowrap">
                    Start for free
                </button>
            </div>

            {/* Bento Grid */}
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-3 md:gap-4">
                    {/* Item 0 - Large Image (col 1-2, row 1) */}
                    <div className="block md:col-start-1 md:row-start-1 md:col-span-2 md:row-span-1 rounded-2xl md:rounded-3xl overflow-hidden border-2 md:border-3 border-purple-500/50 h-[250px] md:h-[450px]">
                        <img
                            src="/bento-grid/cms-1.png"
                            alt="Featured content"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Item 1 - Image 2 (col 3, row 1-2) */}
                    <div className="block md:col-start-3 md:row-start-1 md:col-span-1 md:row-span-2 rounded-2xl md:rounded-3xl justify-start items-start overflow-hidden border-2 md:border-3 border-purple-800 h-[250px] md:h-[916px]">
                        <img
                            src="/bento-grid/cms-2.png"
                            alt="Content 2"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Item 2 - Image 4 (col 2, row 2) */}
                    <div className="block md:col-start-2 md:row-start-2 md:col-span-1 md:row-span-1 rounded-2xl md:rounded-3xl overflow-hidden border-2 md:border-3 border-purple-500/50 h-[250px] md:h-[450px]">
                        <img
                            src="/bento-grid/cms-4.png"
                            alt="Content 4"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Item 3 - Image 3 (col 1, row 2) */}
                    <div className="block md:col-start-1 md:row-start-2 md:col-span-1 md:row-span-1 rounded-2xl md:rounded-3xl overflow-hidden border-2 md:border-3 border-purple-500/50 h-[250px] md:h-[450px]">
                        <img
                            src="/bento-grid/cms-3.png"
                            alt="Content 3"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Item 4 - Image 5 (col 1, row 3) */}
                    <div className="block md:col-start-1 md:row-start-3 md:col-span-1 md:row-span-1 rounded-2xl md:rounded-3xl overflow-hidden border-2 md:border-3 border-purple-500/50 h-[250px] md:h-[450px]">
                        <img
                            src="/bento-grid/cms-5.png"
                            alt="Content 5"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Item 5 - Image 6 (col 2-3, row 3) */}
                    <div className="block md:col-start-2 md:row-start-3 md:col-span-2 md:row-span-1 rounded-2xl md:rounded-3xl overflow-hidden border-2 md:border-3 border-purple-500/50 h-[250px] md:h-[450px]">
                        <img
                            src="/bento-grid/cms-6.png"
                            alt="Content 6"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* View More Button */}
                <div className="flex justify-center mt-8 md:mt-12">
                    <button className="text-white text-base md:text-lg font-semibold flex items-center gap-2 hover:gap-4 transition-all">
                        View hundreds of sites
                        <span>→</span>
                    </button>
                </div>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden flex justify-center mt-6">
                <button className="px-6 py-2.5 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors text-sm w-full max-w-xs">
                    Start for free
                </button>
            </div>
        </section>
    );
}
