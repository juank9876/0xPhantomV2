import { links } from "@/data/links";
import { Check } from "lucide-react";

export default function FoundingCustomer() {
    const benefits = [
        "Build your site in staging for FREE (unlimited time)",
        "30% discount for 6 months when you deploy",
        "Migration hands-on INCLUDED (value: 299€)",
        "Priority support for 6 months (value: 294€)",
        "Direct access to founders (private channel)",
        "Launch price locked for 12 months",
    ];

    const pricingExamples = [
        { plan: "Growth", original: "149€", discounted: "104€" },
        { plan: "Pro", original: "297€", discounted: "208€" },
        { plan: "Scale", original: "497€", discounted: "348€" },
    ];

    return (
        <section className="py-8 sm:py-12 md:py-16 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="pro-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-purple-500/30">
                        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white/80 font-thin mb-2">
                                FOUNDING CUSTOMER PROGRAM — Only 3 spots
                            </p>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tighter">
                                Be one of our first 3 customers and get exclusive benefits.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                            {/* Benefits List */}
                            <div>
                                <h3 className="text-base sm:text-lg md:text-xl font-base text-white mb-4 sm:mb-5 md:mb-6">What you get:</h3>
                                <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                                    {benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-thin text-white/80">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Pricing Example */}
                            <div>
                                <h3 className="text-base sm:text-lg md:text-xl font-base text-white mb-4 sm:mb-5 md:mb-6">
                                    Example pricing with 30% off:
                                </h3>
                                <div className="bg-black/20 border-[1.5px] border-white/50 rounded-2xl sm:rounded-3xl px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-5 md:py-6 shadow-5xl">
                                    {pricingExamples.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`flex items-center justify-between py-4 ${index < pricingExamples.length - 1}`}
                                        >
                                            <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-white">{item.plan}</span>
                                            <div className="flex items-center gap-4">
                                                <span className="text-sm sm:text-base md:text-lg lg:text-xl text-white/40 line-through">
                                                    {item.original}
                                                </span>
                                                <span className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-white">
                                                    {item.discounted}
                                                </span>
                                                <span className="text-sm sm:text-base md:text-lg text-white/60">/month</span>
                                            </div>
                                        </div>
                                    ))}
                                    <p className="text-xs text-white/40 mt-4 text-center">
                                        Total value: up to <span className="text-pink-400">1,127€</span> in savings + extras
                                    </p>
                                </div>
                            </div>
                        </div>
                        <hr className="border-white/20 my-8" />
                        {/* What we ask */}
                        <div className="mb-8">
                            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-3 sm:mb-4">What we ask in return:</h3>
                            <p className="text-sm sm:text-base md:text-lg text-white/60 leading-relaxed">
                                Active testing for 30 days minimum • Bi-weekly feedback call (15 min) • Written testimonial if it works • 1-2 referrals if you love it
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="text-start">
                            <a href={links.applyForFoundingCustomer} target="_blank" rel="noopener noreferrer" className="bg-[#992953]/90 hover:bg-[#992953] text-white px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base">
                                Apply for Founding Customer
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
