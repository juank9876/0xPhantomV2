import { AlertTriangle } from "lucide-react";

export default function NotIncluded() {
    return (
        <section className="pb-8 sm:pb-12 md:pb-16 bg-gradient">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="relative border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 overflow-hidden bg-gradient-to-b from-black via-[#411640BD]/50 to-[#99295366]/20">
                        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                            <AlertTriangle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-red-800/80 flex-shrink-0" />
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-white">
                                What's NOT included in any plan
                            </h2>
                        </div>
                        <p className="text-sm sm:text-base md:text-lg text-white/60 leading-relaxed">
                            <span className="font-semibold text-white/60 ">BrandListy</span>{" "}
                            <span className="text-white/60 font-light">(advanced affiliate analytics: clicks per operator, conversion tracking, offer performance)</span>{" "}
                            is a <span className="font-semibold text-white/60">separate product{" "}</span>
                            <span className="text-white/60 font-light">
                                with its own pricing. Requires separate login. Ask us about adding BrandListy if you need deep affiliate tracking.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
