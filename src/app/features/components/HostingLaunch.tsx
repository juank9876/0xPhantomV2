import { MapPin, OctagonAlert } from "lucide-react";
import Image from "next/image";

export default function HostingLaunch() {
    const locations = [
        {
            name: "Netherlands",
            region: "UK/Europe sites",
            image: "/countries/netherlands.png",
        },
        {
            name: "Russia",
            region: "UK/Europe sites",
            image: "/countries/russia.png",
        },
        {
            name: "Panama",
            region: "Americas",
            image: "/countries/panama.png",
        },
        {
            name: "Asia",
            region: "US/APAC sites",
            image: "/countries/asia.png",
        },
    ];

    return (
        <section className="relative bg-black px-4">
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
                            <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">3</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white">
                            Launch on offshore, distributed hosting
                        </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base md:text-lg text-white/70 mb-6 sm:mb-8 md:mb-10 leading-relaxed">
                        We assign your site to the best hosting location based on your target audience and compliance needs. Your site goes live with a unique digital fingerprint. You manage content from a familiar WordPress-style panel.
                    </p>

                    {/* Locations Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-8 md:mb-10">
                        {locations.map((location, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center hover:border-pink-800/60 hover:from-pink-950/80 hover:via-purple-950/60 transition-all duration-300 group cursor-pointer"
                            >
                                <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-32 md:h-32 rounded-full overflow-hidden mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Image
                                        src={location.image}
                                        alt={location.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 sm:mb-2">
                                    {location.name}
                                </h4>
                                <p className="text-xs sm:text-sm text-white/60">
                                    {location.region}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Info Alert */}
                <div className="bg-gradient-to-r from-[#4a1a3d]/20 to-[#2d1428]/20 border border-pink-900/30 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6">
                    <div className="flex flex-col items-start gap-1">
                        <div className="flex items-start gap-3 sm:gap-4">
                            <OctagonAlert className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400 flex-shrink-0 mt-0.5" />
                            <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2">
                                You don't choose the server; we do
                            </h4>
                        </div>

                        <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed">
                            We assign hosting automatically based on your target audience. This keeps onboarding simple and ensures optimal performance. Need a specific location for regulatory reasons? Open a support ticket.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
