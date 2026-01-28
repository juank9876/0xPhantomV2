'use client';

export default function VideoHero() {
    return (
        <div className="w-full bg-black">
            {/* Top Heading - Above Video */}
            <div className="flex items-center justify-center pt-12 md:pt-16 lg:py-20 px-4 md:px-6">
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center max-w-4xl leading-tight">
                    Find the plan that
                    <br />
                    powers your growth
                </h1>
            </div>

            {/* Video Section */}
            <section className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden bg-black">
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/video_chico.mp4" type="video/mp4" />
                </video>

                {/* Gradient Overlay at Top */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/50 to-transparent z-10 pointer-events-none"></div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Content Container */}
                <div className="relative z-10 flex flex-col items-center justify-end h-full px-4 md:px-6 py-8 md:py-16 lg:py-20">
                    {/* Bottom Content Card */}
                    <div className="flex flex-col items-center gap-4 md:gap-6 pb-4 md:pb-8">
                        {/* Small Label */}
                        <p className="text-xs sm:text-sm text-white/80 tracking-wide">
                            Acquisition & retention
                        </p>

                        {/* Main Heading */}
                        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center max-w-2xl leading-tight">
                            Keep players
                            <br />
                            coming back
                        </h2>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 md:mt-4 w-full sm:w-auto px-4 sm:px-0">
                            <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors text-sm sm:text-base w-full sm:w-auto">
                                Start Fundamentals
                            </button>
                            <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent text-white font-semibold rounded-full border border-white/30 hover:bg-white/10 transition-colors text-sm sm:text-base w-full sm:w-auto">
                                See more lessons
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
