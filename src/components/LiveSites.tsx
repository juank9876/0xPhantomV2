import { ArrowBigRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import FadeInView from "@/components/FadeInView";
import { SvgIcon } from "./ui/svg-icon";
import { ChromaGrid } from "./ChromaGrid";
import { TextReveal } from "./ui/text-reveal";
import { HyperText } from "./ui/hyper-text";
import CardSwap, { Card } from "./CardSwap";
import { Safari } from "./ui/safari";
import Carousel from "./Carousel";
import { FiGlobe } from "react-icons/fi";
const achievements = [
    "Team with 8+ years managing casino/iGaming SEO at Interamplify",
    "30 production-ready templates specific to casino affiliates—enough variety to avoid \"same design\" detection across large portfolios",
    "Hosting infrastructure battle-tested with offshore locations and backup systems to prevent data loss",
    "Proven indexation advantage: Next.js sites in our tests got crawled and indexed faster than WordPress equivalents"
];

export default function LiveSites() {
    return (
        <section className="relative bg-black  px-4 md:px-6 py-12 sm:py-16 md:py-20">
            <SvgIcon
                src="/bg-icons/icon_machine1.svg"
                className="xl:opacity-20 opacity-10 absolute top-70 -left-10 lg:-left-40 w-32 sm:w-40 md:w-48 lg:w-96 h-32 sm:h-40 md:h-48 lg:h-96 scale-200 pointer-events-none z-0 "
                alt=""
            />

            <FadeInView className="max-w-7xl mx-auto relative">
                <HyperText defaultStyles={false} className="text-2xl md:text-3xl lg:text-4xl font-thin text-white ">
                    How Phantom makes
                </HyperText>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white leading-tight">
                    Already running live casino affiliate sites with better SEO performance than WordPress.
                </h3>
                <p className="text-base md:text-lg text-gray-400 mb-4 leading-relaxed">
                    Phantom isn't a concept or a beta. We're running live casino affiliate sites on this stack right now—and our own experiments show they index faster and rank better than equivalent WordPress sites.
                </p>
            </FadeInView>
            <div className="lg:flex hidden flex-col justify-start items-start " style={{ height: '700px', position: 'relative' }}>
                <CardSwap
                    width={1000}
                    height={650}
                    cardDistance={60}
                    verticalDistance={70}
                    delay={3000}
                    pauseOnHover={true}
                >
                    <Card style={{ padding: 0, overflow: 'hidden' }}>
                        <Safari url="spinbonuscasino.com" imageSrc="/section-howphantommakes-2/img-1.png" objectFit="cover" />
                    </Card>
                    <Card style={{ padding: 0, overflow: 'hidden' }}>
                        <Safari url="tipstersguide.com" imageSrc="/section-howphantommakes-2/img-2.png" objectFit="cover" />
                    </Card>
                    <Card style={{ padding: 0, overflow: 'hidden' }}>
                        <Safari url="app.xphantom.io" imageSrc="/section-howphantommakes-2/img-3.png" objectFit="cover" />
                    </Card>
                    <Card style={{ padding: 0, overflow: 'hidden' }}>
                        <Safari url="app.xphantom.io" imageSrc="/section-howphantommakes-2/img-1.png" objectFit="cover" />
                    </Card>
                </CardSwap>
            </div>

            <div className="lg:hidden flex justify-center items-center py-8 relative">

                <Carousel
                    items={[
                        {
                            title: "spinbonuscasino.com",
                            description: "Live casino affiliate site running on Phantom",
                            id: 1,
                            icon: <FiGlobe className="carousel-icon" />,
                            image: "/section-howphantommakes-2/img-1.png"
                        },
                        {
                            title: "tipstersguide.com",
                            description: "Sports betting guide powered by Next.js",
                            id: 2,
                            icon: <FiGlobe className="carousel-icon" />,
                            image: "/section-howphantommakes-2/img-2.png"
                        },
                        {
                            title: "app.xphantom.io",
                            description: "Phantom CMS management platform",
                            id: 3,
                            icon: <FiGlobe className="carousel-icon" />,
                            image: "/section-howphantommakes-2/img-3.png"
                        }
                    ] as any}
                    baseWidth={320}
                    autoplay={true}
                    autoplayDelay={3000}
                    pauseOnHover={true}
                    loop={true}
                />

            </div>

            <div className="flex flex-col gap-8 lg:gap-12 items-start w-full lg:w-1/3  lg:pt-80 lg:pb-20 pb-10 pt-10">
                <ul className="space-y-4">
                    {achievements.map((achievement, index) => (
                        <li key={index} className="font-mono flex items-start gap-3 group cursor-pointer transition-all duration-300 hover:translate-x-2">
                            <ArrowBigRight className="shrink-0 w-6 h-6 text-white mt-1 transition-colors duration-300 group-hover:text-pink-400" />
                            <p className="text-lg  text-gray-100/90 leading-relaxed transition-colors duration-300 group-hover:text-white">
                                {achievement}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

