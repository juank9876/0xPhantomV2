import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import PricingHero from "./components/PricingHero";
import PricingGrid from "./components/PricingGrid";
import HowPricingWorks from "./components/HowPricingWorks";
import CapacityAddons from "./components/CapacityAddons";
import DoneForYou from "./components/DoneForYou";
import FoundingCustomer from "./components/FoundingCustomer";
import NotIncluded from "./components/NotIncluded";
import PricingFAQ from "./components/PricingFAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
    },
};

export default function PricingPage() {


    return (
        <div className="min-h-screen bg-background text-foreground dark">
            <Header />

            <main>
                <PricingHero />

                <PricingGrid />

                <HowPricingWorks />

                <CapacityAddons />

                <DoneForYou />

                <FoundingCustomer />

                <NotIncluded />

                <PricingFAQ />

                {/* Pricing Cards 
                <section className="pb-24 bg-black">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {plans.map((plan) => {
                                return (
                                    <div
                                        key={plan.name}
                                        className={`relative p-8 flex flex-col transition-all duration-300 ${plan.highlighted
                                            ? "pro-card rounded-2xl border border-white/10 hover:border-purple-500/50 backdrop-blur-sm"
                                            : "normal-card rounded-2xl border border-white/10 hover:border-purple-500/50 backdrop-blur-sm"
                                            }`}
                                    >
                                        <div className="mb-8">
                                            <div className="flex items-start justify-between mb-3">
                                                <div>
                                                    <h3 className="text-2xl font-bold text-white mb-1">
                                                        {plan.name}
                                                    </h3>
                                                    <p className="text-gray-400 text-sm">{plan.description}</p>
                                                </div>
                                                <span className="text-xs font-semibold text-gray-400 bg-gray-800/50 px-2.5 py-1 rounded-md whitespace-nowrap ml-3">
                                                    {plan.badge}
                                                </span>
                                            </div>
                                            <div className="flex items-center mt-6 border-y border-y-white/10 py-5">
                                                <span className="text-3xl font-normal text-white ">
                                                    {plan.price}
                                                </span>
                                                <span className="text-white/40 ml-2 text-sm">{plan.period}</span>
                                            </div>
                                        </div>

                                        <ul className="space-y-3 mb-8 flex-grow">
                                            {plan.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-start gap-3">
                                                    {feature.included ? (
                                                        <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                                                    ) : (
                                                        <span className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5">—</span>
                                                    )}
                                                    <span className="text-gray-300 text-sm">{feature.text}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <button
                                            className={`w-full py-2 rounded-full font-medium transition-all ${plan.highlighted
                                                ? "bg-[#992953] text-white hover:bg-[#992953]/80"
                                                : "bg-white/10 border-white/10 text-white hover:bg-white/20"
                                                }`}
                                        >
                                            {plan.buttonText}
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
*/}
                {/* Enterprise Section 
                        <div className="max-w-6xl mx-auto mt-6">
                            <div className="enterprise-card rounded-2xl p-6 flex items-center justify-between">
                                <div className="flex items-center gap-5">
                                    <h3 className="text-lg text-white mb-1">Enterprise</h3>
                                    <p className="text-white/40 text-base">
                                        For teams that need custom limits, enterprise security, and dedicated support.
                                    </p>
                                </div>
                                <button
                                    className="border-white/30 bg-white/10 py-2 transition-all duration-300 rounded-full text-white hover:bg-white/20 px-6 whitespace-nowrap"
                                >
                                    Request trial
                                </button>
                            </div>
                        </div>
*/}
                {/* Trusted by Companies
                        <div className="max-w-6xl mx-auto mt-24">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center opacity-60">
                                <img src="/brandlisty.png" alt="BIRD" className="h-8 grayscale hover:grayscale-0 transition-all" />
                                <div className="text-white text-2xl font-bold tracking-wider">SPACEX</div>
                                <div className="text-white text-lg font-semibold flex items-center gap-2">
                                    <span className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-xs">◉</span>
                                    VISUAL ELECTRIC
                                </div>
                                <div className="text-white text-2xl font-bold italic">Dribbble</div>
                                <div className="text-white text-xl font-bold flex items-center gap-1">
                                    <span className="bg-white text-black px-2 py-1 rounded">M</span>
                                    miro
                                </div>
                                <div className="text-white text-lg font-semibold tracking-wide">perplexity</div>
                                <div className="text-white text-2xl font-bold tracking-tight">DOORDASH</div>
                                <div className="text-white text-lg font-semibold">mixpanel</div>
                            </div>
                        </div>
                    </div>
                </section>
 */}
                {/* Comparison Table 
                <section className="py-24 bg-black">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-5xl mx-auto overflow-x-auto">
                            <div className="bg-transparent border border-white/30 rounded-3xl overflow-hidden backdrop-blur-sm">
                                <div className="grid grid-cols-4">
                                    <div className="border-b border-r border-white/30 p-6">
                                        <h3 className="text-lg font-bold text-white"></h3>
                                    </div>
                                    {plans.map((plan, idx) => (
                                        <div key={plan.name} className={`border-b border-white/30 p-6 items-center justify-between flex flex-row ${idx < plans.length - 1 ? 'border-r' : ''}`}>
                                            <h4 className="text-lg font-bold text-white mb-1">{plan.name}</h4>
                                            <p className="text-base font-light text-white/60">{plan.price}</p>
                                        </div>
                                    ))}
                                </div>

                                {[
                                    { feature: "Custom domain", description: "Connect your own domain", values: ["✓", "✓", "✓"] },
                                    {
                                        feature: "Limits",
                                        description: "Scale with usage",
                                        values: ["Fixed", "Fixed", "Flexible"],
                                        valueDescription: ["", "", "pay what you use"]
                                    },
                                    {
                                        feature: "Site pages",
                                        description: "Create custom designed pages",
                                        values: ["30", "150", "300"],
                                        valueDescription: ["", "", "then €20 per 100"]
                                    },
                                    {
                                        feature: "CMS collections",
                                        description: "Store content in CMS collections",
                                        values: ["1", "10", "20"],
                                        valueDescription: ["", "", "then €40 per 10"]
                                    },
                                    {
                                        feature: "CMS items",
                                        description: "Add CMS items to your collections",
                                        values: ["1,000", "2,500", "10,000"],
                                        valueDescription: ["", "", "then €20 per 10,000"]
                                    },
                                    {
                                        feature: "Bandwidth usage",
                                        description: "Monthly bandwidth with overage alerts",
                                        values: ["10 GB", "100 GB", "200 GB"],
                                        valueDescription: ["", "", "then €40 per 100 GB"]
                                    },
                                    { feature: "Hosting", description: "Global content delivery network for speed", values: ["20 locations", "20 locations", "300+ locations"] },
                                    { feature: "Password protect", description: "Protect your site", values: ["✓", "✓", "✓"] },
                                    { feature: "Site search", description: "Find anything on your site instantly", values: ["✓", "✓", "✓"] },
                                    { feature: "Site redirects", description: "Add redirects to maintain search rankings", values: ["—", "✓", "✓"] },
                                    { feature: "Well-known files", description: "Host .well-known files for your site", values: ["—", "✓", "✓"] },
                                ].map((row, idx) => (
                                    <div key={idx} className="grid grid-cols-4">
                                        <div className="border-b border-r border-white/30 p-6">
                                            <div className="text-white font-medium mb-1">{row.feature}</div>
                                            <div className="text-base text-white/60">{row.description}</div>
                                        </div>
                                        {row.values.map((value, vIdx) => (
                                            <div key={vIdx} className={`border-b border-white/30 p-6 flex flex-col items-center justify-center ${vIdx < row.values.length - 1 ? 'border-r' : ''}`}>
                                                {value === "✓" ? (
                                                    <Check className="w-5 h-5 text-white" />
                                                ) : value === "—" ? (
                                                    <span className="text-gray-600">—</span>
                                                ) : (
                                                    <>
                                                        <div className="text-base text-white text-center">{value}</div>
                                                        {row.valueDescription && row.valueDescription[vIdx] && (
                                                            <div className="font-light text-white/60 text-center mt-1">{row.valueDescription[vIdx]}</div>
                                                        )}
                                                    </>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>

                            <div className="bg-transparent border border-white/30 rounded-3xl overflow-hidden backdrop-blur-sm mt-12">
                                <div className="p-8 border-b border-white/30">
                                    <h3 className="text-2xl font-bold text-white mb-2">Live collaboration</h3>
                                    <p className="text-base text-white/60">
                                        Invite your team to collaborate on design, content, and publishing.
                                    </p>
                                </div>

                                {[
                                    {
                                        feature: "Editors",
                                        description: "Design, edit content, and publish your site",
                                        values: ["€20 per editor", "€40 per editor", "€40 per editor"],
                                        valueDescription: ["1 included", "1 included", "1 included"]
                                    },
                                    {
                                        feature: "Seats",
                                        description: "The maximum number of editors per workspace",
                                        values: ["2", "10", "10"]
                                    },
                                    {
                                        feature: "Roles and permissions",
                                        description: "Manage who can view, edit content, design and deploy",
                                        values: ["—", "✓", "✓"]
                                    },
                                ].map((row, idx) => (
                                    <div key={idx} className="grid grid-cols-4">
                                        <div className="border-b border-r border-white/30 p-6">
                                            <div className="text-white font-medium mb-1">{row.feature}</div>
                                            <div className="text-base text-white/60">{row.description}</div>
                                        </div>
                                        {row.values.map((value, vIdx) => (
                                            <div key={vIdx} className={`border-b border-white/30 p-6 flex flex-col items-center justify-center ${vIdx < row.values.length - 1 ? 'border-r' : ''}`}>
                                                {value === "✓" ? (
                                                    <Check className="w-5 h-5 text-white" />
                                                ) : value === "—" ? (
                                                    <span className="text-gray-600">—</span>
                                                ) : (
                                                    <>
                                                        <div className="text-base text-white text-center">{value}</div>
                                                        {row.valueDescription && row.valueDescription[vIdx] && (
                                                            <div className="font-light text-white/60 text-center mt-1">{row.valueDescription[vIdx]}</div>
                                                        )}
                                                    </>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>

                            <div className="bg-transparent border border-white/30 rounded-3xl overflow-hidden backdrop-blur-sm mt-12">
                                <div className="p-8 border-b border-white/30">
                                    <h3 className="text-2xl font-bold text-white mb-2">Add-ons</h3>
                                    <p className="text-base text-white/60">
                                        From localizing your site to running multiple A/B-tests, power up your site with add-ons.
                                    </p>
                                </div>

                                {[
                                    {
                                        feature: "Translation locales",
                                        description: "Translate your site into multiple languages with AI",
                                        values: ["Up to 1", "Up to 10", "Up to 20"],
                                        valueDescription: ["€20 per locale", "€20 per locale", "€20 per locale"]
                                    },
                                    {
                                        feature: "A/B testing",
                                        description: "Run A/B tests with real-time results",
                                        values: ["—", "—", "€50"],
                                        valueDescription: ["—", "—", "per 500,000 events"]
                                    },
                                    {
                                        feature: "Multi-site proxy",
                                        description: "Host multiple sites under one domain",
                                        values: ["—", "—", "€300"]
                                    },
                                ].map((row, idx) => (
                                    <div key={idx} className="grid grid-cols-4">
                                        <div className="border-b border-r border-white/30 p-6">
                                            <div className="text-white font-medium mb-1">{row.feature}</div>
                                            <div className="text-base text-white/60">{row.description}</div>
                                        </div>
                                        {row.values.map((value, vIdx) => (
                                            <div key={vIdx} className={`border-b border-white/30 p-6 flex flex-col items-center justify-center ${vIdx < row.values.length - 1 ? 'border-r' : ''}`}>
                                                {value === "—" ? (
                                                    <span className="text-gray-600">—</span>
                                                ) : (
                                                    <>
                                                        <div className="text-base text-white text-center">{value}</div>
                                                        {row.valueDescription && row.valueDescription[vIdx] && row.valueDescription[vIdx] !== "—" && (
                                                            <div className="font-light text-white/60 text-center mt-1">{row.valueDescription[vIdx]}</div>
                                                        )}
                                                    </>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                ))}

                                <div className="grid grid-cols-4">
                                    <div className="border-r border-white/30 p-6"></div>
                                    <div className="border-r border-white/30 p-6 flex items-center justify-center">
                                        <button className="w-full py-2 rounded-full font-medium transition-all bg-white/10 border-white/10 text-white hover:bg-white/20">
                                            Start with Basic
                                        </button>
                                    </div>
                                    <div className="border-r border-white/30 p-6 flex items-center justify-center">
                                        <button className="w-full py-2 rounded-full font-medium transition-all bg-white text-black hover:bg-white/80">
                                            Start with Pro
                                        </button>
                                    </div>
                                    <div className="p-6 flex items-center justify-center">
                                        <button className="w-full py-2 rounded-full font-medium transition-all bg-white/10 border-white/10 text-white hover:bg-white/20">
                                            Start with Scale
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
*/}
                {/* FAQ Section 
                <section className="py-24 bg-black">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-5xl font-bold text-white mb-12">
                                FAQ
                            </h2>

                            <div className="space-y-8">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-white/30 pb-8 last:border-b-0">
                                        <h3 className="text-lg  text-white mb-3">
                                            {faq.question}
                                        </h3>
                                        <p className="text-white/40 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className=" pt-8 border-t border-white/30">
                                <p className="text-white/40">
                                    Explore our{" "}
                                    <a href="#" className="text-white underline hover:text-gray-300">
                                        help section
                                    </a>{" "}
                                    for all articles related to account and billing.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
*/}
            </main>

            <Footer />
        </div>
    );
}
