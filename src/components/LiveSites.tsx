import { ArrowBigRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import FadeInView from "@/components/FadeInView";
import { SvgIcon } from "./ui/svg-icon";
import { ChromaGrid } from "./ChromaGrid";
import { TextReveal } from "./ui/text-reveal";

const achievements = [
    "Team with 8+ years managing casino/iGaming SEO at Interamplify",
    "30 production-ready templates specific to casino affiliates—enough variety to avoid \"same design\" detection across large portfolios",
    "Hosting infrastructure battle-tested with offshore locations and backup systems to prevent data loss",
    "Proven indexation advantage: Next.js sites in our tests got crawled and indexed faster than WordPress equivalents"
];

export default function LiveSites() {
    return (
        <section className="relative bg-black  px-4 md:px-6 pt-12 sm:pt-16 md:pt-20">
            <SvgIcon
                src="/bg-icons/icon_machine1.svg"
                className="xl:opacity-20 opacity-10 absolute top-70 -left-10 lg:-left-40 w-32 sm:w-40 md:w-48 lg:w-96 h-32 sm:h-40 md:h-48 lg:h-96 scale-200 pointer-events-none z-0 "
                alt=""
            />
            <div className="">

                <FadeInView className="max-w-7xl mx-auto relative">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-thin text-white ">
                        How Phantom makes
                    </h2>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white leading-tight">
                        Already running live casino affiliate sites with better SEO performance than WordPress.
                    </h3>
                    <p className="text-base md:text-lg text-gray-400 mb-4 leading-relaxed">
                        Phantom isn't a concept or a beta. We're running live casino affiliate sites on this stack right now—and our own experiments show they index faster and rank better than equivalent WordPress sites.
                    </p>
                </FadeInView>

                <div className="flex flex-col gap-8 lg:gap-12 items-center">


                    {/* Right column - ChromaGrid */}
                    <FadeInView delay={0.2} direction="right" className="w-full">
                        <ChromaGrid
                            items={[
                                {
                                    image: '/section-howphantommakes-2/img-1.png',
                                    title: '30+',
                                    subtitle: 'Casino-specific templates',
                                    borderColor: '#EC4899',
                                    gradient: 'linear-gradient(145deg, #EC4899, #000)'
                                },
                                {
                                    image: '/section-howphantommakes-2/img-2.png',
                                    title: 'Live Sites',
                                    subtitle: 'Running in production',
                                    borderColor: '#8B5CF6',
                                    gradient: 'linear-gradient(210deg, #8B5CF6, #000)'
                                },
                                {
                                    image: '/section-howphantommakes-2/img-3.png',
                                    title: 'UK Casinos',
                                    subtitle: 'Compliant & Fast',
                                    borderColor: '#F59E0B',
                                    gradient: 'linear-gradient(165deg, #F59E0B, #000)'
                                },
                                {
                                    image: '/section-howphantommakes-2/img-1.png',
                                    title: '8+ Years',
                                    subtitle: 'iGaming SEO Experience',
                                    borderColor: '#10B981',
                                    gradient: 'linear-gradient(195deg, #10B981, #000)'
                                },
                                {
                                    image: '/section-howphantommakes-2/img-2.png',
                                    title: 'Next.js',
                                    subtitle: 'Better indexation',
                                    borderColor: '#06B6D4',
                                    gradient: 'linear-gradient(225deg, #06B6D4, #000)'
                                },
                                {
                                    image: '/section-howphantommakes-2/img-3.png',
                                    title: 'Offshore Ready',
                                    subtitle: 'Battle-tested hosting',
                                    borderColor: '#EF4444',
                                    gradient: 'linear-gradient(135deg, #EF4444, #000)'
                                }
                            ]}
                            columns={3}
                            rows={2}
                            radius={300}
                            damping={0.45}
                            fadeOut={0.6}
                            ease="power3.out"
                        />
                    </FadeInView>

                    {/* Left column - Achievements */}
                    <FadeInView delay={0.1} direction="left">
                        <ul className="space-y-4 backdrop-blur-md">
                            {achievements.map((achievement, index) => (
                                <li key={index} className="flex  items-start gap-3 group cursor-pointer transition-all duration-300 hover:translate-x-2">
                                    <ArrowBigRight className="shrink-0 w-6 h-6 text-white mt-1 transition-colors duration-300 group-hover:text-pink-400" />
                                    <p className="text-2xl  text-gray-100/90 leading-relaxed transition-colors duration-300 group-hover:text-white">
                                        {achievement}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </FadeInView>
                </div>
            </div>
        </section>
    );
}
