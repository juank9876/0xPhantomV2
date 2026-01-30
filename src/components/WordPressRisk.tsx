import Image from "next/image";
import FadeInView from "@/components/FadeInView";
import { WavyBackground } from "./ui/wavy-background";
import { SvgIcon } from "@/components/ui/svg-icon";
import { TextReveal } from "./ui/text-reveal";
import { HyperText } from "./ui/hyper-text";

export default function WordPressRisk() {
    return (
        <section className="relative bg-black/10 pt-3 sm:pt-12 md:pt-30 px-4 sm:px-6 md:px-8 overflow-hidden">
            {/* Background image 
            <img
                src="/bg-waves.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover mt-[700px] opacity-90 z-0"
            />
            */}


            {/* Gradient fade overlay */}
            <div
                className="absolute inset-0 z-1 pointer-events-none bg-black"

            />

            <div className="max-w-full mx-auto relative z-10">
                <FadeInView>
                    <div className="mb-5 sm:mb-6 md:mb-8 lg:mb-10 max-w-7xl mx-auto ">
                        <h5 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white  mb-4 sm:mb-5 md:mb-6 leading-tight">
                            <HyperText startOnView className="font-thin text-lg lg:text-4xl pb-0">The real risk:</HyperText>
                            <span className="">WordPress exposes your entire portfolio to mass penalties</span>
                        </h5>
                        <p className="text-gray-400 text-sm sm:text-base md:text-lg w-full leading-relaxed">
                            You've seen it happen. One Google update and affiliate networks running hundreds of sites on the same CMS get hit overnight—30%, 50%, 70%
                            traffic drops across ALL sites.
                            <br /><br />
                            <span className="font-bold italic">Why?</span> Because Google can fingerprint WordPress. Every site using wp-content/, wp-includes/, and popular plugins
                            shares the same digital signature.
                            <br /><br />
                            When Google decides to treat low-quality CMS affiliates differently, your whole business is exposed: not just
                            one site, but your entire portfolio
                        </p>
                    </div>
                    {/* Background SVG Icon */}
                </FadeInView>
                <SvgIcon
                    src="/bg-icons/icon_machine2.svg"
                    className="absolute top-40 -right-20 lg:-right-40 w-32 sm:w-40 md:w-48 lg:w-96 h-32 sm:h-40 md:h-48 lg:h-96 scale-150 xl:scale-200 xl:opacity-20 lg:opacity-10 opacity-8 pointer-events-none -z-1 "
                    alt=""
                />
                <SvgIcon
                    src="/bg-icons/icon_fortune1.svg"
                    className="absolute top-70  lg:-left-40 w-32 sm:w-40 md:w-48 lg:w-96 h-32 sm:h-40 md:h-48 lg:h-96 scale-150 xl:scale-200 xl:opacity-20 lg:opacity-10 opacity-8 pointer-events-none -z-1 "
                    alt=""
                />
                <div className="relative max-w-7xl mx-auto overflow-hidden pt-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 pb-4 px-0 place-items-center lg:place-items-stretch">
                        <FadeInView delay={0.1} direction="up" className="w-full h-[450px] md:h-[500px]">
                            <div className="group cursor-pointer transition-all duration-300 rounded-xl md:rounded-2xl h-full w-full relative overflow-hidden border border-gray-800">
                                <div className="absolute inset-0 w-full h-full group-hover:saturate-10 group-hover:contrast-150 transition-all duration-500">
                                    <Image
                                        src="/section-wordpress/img-1.jpg"
                                        alt="Single Point of Failure"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="transition-transform duration-300 "
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 backdrop-blur-md bg-black/70 transition-all duration-500">
                                    <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-white transition-all duration-500 ">
                                        Single Point of Failure
                                    </h3>
                                    <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-40 group-hover:mt-3">
                                        <p className="text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed transition-all duration-500 group-hover:text-white">
                                            Running 20, 50, or 200 casino affiliate sites on WordPress creates one vulnerability. Google can detect the pattern and penalize them all at once.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeInView>

                        <FadeInView delay={0.2} direction="up" className="w-full h-[450px] md:h-[500px]">
                            <div className="group cursor-pointer transition-all duration-300  rounded-xl md:rounded-2xl h-full w-full relative overflow-hidden border border-gray-800">
                                <div className="absolute inset-0 w-full h-full group-hover:saturate-10 group-hover:contrast-150 transition-all duration-500">
                                    <Image
                                        src="/section-wordpress/img-2.jpg"
                                        alt="Technical Fingerprints"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="transition-transform duration-300 "
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 backdrop-blur-md bg-black/70 transition-all duration-500">
                                    <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-white transition-all duration-500 group-hover:-translate-y-2">
                                        Technical Fingerprints
                                    </h3>
                                    <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-40 group-hover:mt-3">
                                        <p className="text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed transition-all duration-500 translate-y-4 group-hover:translate-y-0 group-hover:text-white">
                                            Every WordPress site shares folders like wp-content/, wp-includes/, and common plugins. Google's crawlers see these patterns across your entire network.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeInView>

                        <FadeInView delay={0.3} direction="up" className="w-full h-[450px] md:h-[500px] group">
                            <div className="group cursor-pointer transition-all duration-300  rounded-xl md:rounded-2xl h-full w-full relative overflow-hidden border border-gray-800">
                                <div className="absolute inset-0 w-full h-full group-hover:saturate-10 group-hover:contrast-150 transition-all duration-500">
                                    <Image
                                        src="/section-wordpress/img-3.jpg"
                                        alt="Compliance Issues"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="transition-transform duration-300 "
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 backdrop-blur-md bg-black/70 transition-all duration-500">
                                    <h3 className="text-lg sm:text-xl md:text-3xl font-semibold text-white transition-all duration-500 group-hover:-translate-y-2">
                                        Compliance Issues
                                    </h3>
                                    <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-40 group-hover:mt-3">
                                        <p className="text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed transition-all duration-500 translate-y-4 group-hover:translate-y-0 group-hover:text-white">
                                            Hosting restrictions in iGaming markets (UK, Europe, LatAm) make it harder to keep WordPress sites fast, compliant, AND undetectable.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeInView>
                    </div>
                </div>

                <SvgIcon
                    src="/bg-icons/icon_poker2.svg"
                    className="
                            absolute
                            left-1/2
                            bottom-10
                            -translate-x-1/2
                            -translate-y-1/2
                            w-32 sm:w-40 md:w-48 lg:w-56
                            h-32 sm:h-40 md:h-48 lg:h-56
                            pointer-events-none
                            z-0
                            xl:opacity-20 opacity-10
                            "
                    alt=""
                />
                <FadeInView delay={0.2}>
                    <div className="relative w-full my-10 sm:my-12 md:my-16 lg:my-20">
                        <WavyBackground
                            speed="slow"
                            waveOpacity={1}
                            blur={15}
                            waveWidth={50}
                            className=""
                        >
                            <div className="rounded-lg bg-black/60 backdrop-blur-xl   w-full">
                                <TextReveal
                                    className="font-medium text-white text-center"
                                    lineHeight="leading-loose"
                                    fontSize="lg:text-7xl text-4xl"
                                >
                                    "What if I wake up tomorrow and my entire portfolio is deindexed because Google flagged our CMS?"
                                </TextReveal>
                            </div>
                        </WavyBackground>
                    </div>
                </FadeInView>
            </div>
        </section>
    );
}
