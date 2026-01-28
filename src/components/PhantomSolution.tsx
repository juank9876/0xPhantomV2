import FadeInView from "@/components/FadeInView";
import { SvgIcon } from "./ui/svg-icon";
import { Card } from "./lightswind/card";
import CardFlip from "./kokonutui/card-flip";
import Beams from "./Beams";
import { GridScan } from "./GridScan";
import { TextReveal } from "./ui/text-reveal";

export default function PhantomSolution() {
    return (
        <section className="relative bg-black pt-12 sm:pt-16 md:pt-20 px-4 sm:px-6 md:px-8">


            <div className="max-w-7xl mx-auto relative">
                <FadeInView>
                    <div className="mb-10 sm:mb-12 md:mb-10">
                        <h5 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-tight">
                            <span className="">Why Google can't detect Phantom sites</span>
                            <br />
                            <span className="font-thin">and why that protects your entire portfolio.</span>
                        </h5>
                        <p className="text-sm sm:text-base md:text-md text-gray-400 w-full leading-relaxed mb-3 sm:mb-4">
                            Here's the problem with WordPress: Every site leaves the same technical signature. Google's crawlers see "wp-content/themes/", "wp-includes/",
                            and common plugins like Yoast, WooCommerce, or Elementor. When you run 50 or 200 casino affiliate sites on WordPress, Google knows they're
                            all connected, even if they're on different domains.
                        </p>

                    </div>
                </FadeInView>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 relative min-h-[500px]">
                    <SvgIcon
                        src="/bg-icons/icon_pieces.svg"
                        className="absolute top-0 -left-30 rotate-330 w-32 sm:w-40 md:w-48 lg:w-56 h-32 sm:h-40 md:h-48 lg:h-56 opacity-8 pointer-events-none z-0"
                        alt=""
                    />
                    <FadeInView delay={0.1} direction="left" className="h-full">
                        <CardFlip
                            title="WordPress network:"
                            subtitle="200 sites"
                            description="Google detects a pattern in all of them"
                            features={[
                                "wp-content/",
                                "wp-includes/",
                                "plugins",
                                "Mass Penalty Possible"
                            ]}
                        >
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <Beams />
                                <img
                                    src="/wordpress-1.png"
                                    alt="WordPress"
                                    className="absolute h-60 object-contain z-10"
                                />
                            </div>
                        </CardFlip>
                    </FadeInView>


                    <FadeInView delay={0.2} direction="right" className="h-full">
                        <CardFlip
                            title="Phantom network:"
                            subtitle="200 sites"
                            description="Google sees 200 unrelated sites"
                            features={[
                                "unique Next.js code 1",
                                "unique Next.js code 2",
                                "...",
                                "No Mass Penalty Risk"
                            ]}
                        >
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <GridScan
                                    sensitivity={0.55}
                                    lineThickness={1}
                                    linesColor="#392e4e"
                                    gridScale={0.1}
                                    scanColor="#FF9FFC"
                                    scanOpacity={0.4}
                                    enablePost
                                    bloomIntensity={0.6}
                                    chromaticAberration={0.002}
                                    noiseIntensity={0.01}
                                    className=""
                                    style={{}}
                                />
                                <img
                                    src="/logo.png"
                                    alt="Phantom"
                                    className="absolute h-22 object-contain z-10 "
                                />
                            </div>
                        </CardFlip>
                    </FadeInView>
                </div>

                <TextReveal
                    className="font-medium text-white text-center"
                    lineHeight="leading-loose"
                    fontSize="text-7xl"
                >
                    If Google decides to downrank "WordPress affiliate networks" (like they did with Wix in the past), your whole portfolio gets hit.
                </TextReveal>
                <FadeInView delay={0.2}>
                    <div className="rounded-xl md:rounded-2xl bg-gradient-to-t from-[#992953]/20 via-[#411640]/50 to-[#000000]/20 border p-6 sm:p-8 md:p-10 lg:p-12 mt-5 sm:mt-6 md:mt-8 transition-all duration-300 hover:border-[#992953] hover:shadow-lg hover:shadow-[#992953]/30 hover:from-[#992953]/30 hover:via-[#411640]/60">
                        <h3 className="text-5xl text-white mb-3 sm:mb-4 font-thin">
                            Phantom's solution:
                        </h3>
                        <p className="text-sm sm:text-base md:text-md text-gray-200/60 leading-relaxed">
                            Phantom gives each site a <strong>hardcoded Next.js frontend</strong>. <br /><br />
                            No shared CMS folders. <br /><br />
                            No plugin fingerprints. <br /><br />
                            No detectable pattern. <br /><br />
                            Even if you migrate 500 sites, Google sees 500 independent, custom-built websites: not a mass-produced affiliate network.
                        </p>
                    </div>
                </FadeInView>
            </div>
        </section>
    );
}
