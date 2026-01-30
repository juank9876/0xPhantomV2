import FadeInView from "@/components/FadeInView";
import { SvgIcon } from "./ui/svg-icon";
import { Card } from "./lightswind/card";
import CardFlip from "./kokonutui/card-flip";
import Beams from "./Beams";
import { GridScan } from "./GridScan";
import { TextReveal } from "./ui/text-reveal";
import { NeonGradientCard } from "./ui/neon-gradient-card";
import { HexagonBackground } from "./animate-ui/components/backgrounds/hexagon";
import { GridPattern } from "./ui/grid-pattern"
import { AnimatedGridPattern } from "./ui/animated-grid-pattern";
import { RetroGrid } from "./ui/retro-grid";
import { HyperText } from "./ui/hyper-text";

export default function PhantomSolution() {
    return (
        <section className="relative bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">


            <div className="max-w-7xl mx-auto relative">
                <FadeInView>
                    <div className="mb-10 sm:mb-12 md:mb-10">
                        <h5 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-tight">
                            <span className="">Why Google can't detect Phantom sites</span>
                            <br />
                            <HyperText startOnView className="font-thin">and why that protects your entire portfolio.</HyperText>
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
                    fontSize="lg:text-7xl text-4xl"
                >
                    If Google decides to downrank "WordPress affiliate networks" (like they did with Wix in the past), your whole portfolio gets hit.
                </TextReveal>
                <FadeInView delay={0.2}>
                    <NeonGradientCard className="mx-auto relative items-center justify-center text-center">
                        <RetroGrid className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]" />
                        <HyperText startOnView className=" pt-5 pointer-events-none z-10 h-full bg-gradient-to-br from-[#ff639a] from-35% to-[#983eff] bg-clip-text text-center text-3xl leading-none font-bold tracking-tighter text-balance whitespace-pre-wrap text-transparent md:text-5xl xl:text-6xl dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                            OX-Phantom's solution
                        </HyperText>
                        <div className="mt-3 space-y-4 pb-10">
                            <p className="text-base sm:text-lg md:text-xl text-white/90 font-medium">
                                Phantom gives each site a
                            </p>
                            <HyperText startOnView className="text-[#ff639a]">hardcoded Next.js frontend</HyperText>
                            <p>.</p>

                            <ul className="mx-auto flex justify-center flex-col items-center space-y-3 text-start max-w-2xl">
                                <li className="flex items-center justify-start gap-3 text-sm sm:text-base md:text-lg text-gray-200/80">
                                    <span className="text-[#983eff] mt-1 shrink-0">✓</span>
                                    <span>No shared CMS folders.</span>
                                </li>
                                <li className="flex items-center justify-start gap-3 text-sm sm:text-base md:text-lg text-gray-200/80">
                                    <span className="text-[#983eff] mt-1 shrink-0">✓</span>
                                    <span>No plugin fingerprints.</span>
                                </li>
                                <li className="flex items-center justify-start gap-3 text-sm sm:text-base md:text-lg text-gray-200/80">
                                    <span className="text-[#983eff] mt-1 shrink-0">✓</span>
                                    <span>No detectable pattern.</span>
                                </li>
                            </ul>

                        </div>
                        <p className="text-sm sm:text-base md:text-lg text-gray-300/70 leading-relaxed pt-4 border-t border-gray-700/30">
                            Even if you migrate <strong className="text-white">500 sites</strong>, Google sees 500 independent, custom-built websites: <strong className="text-[#ff639a]">not a mass-produced affiliate network</strong>.
                        </p>

                    </NeonGradientCard>
                </FadeInView>
            </div>
        </section>
    );
}
