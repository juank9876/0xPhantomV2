import Image from "next/image";
import FadeInView from "@/components/FadeInView";
import { HyperText } from "./ui/hyper-text";
import MagicBento from "@/components/MagicBento";

interface FeatureItem {
    iconSrc?: string;
    title: string;
    description: string;
    description2?: string;
    proofPoint?: {
        title: string;
        description: string;
    };
    className?: string;
    span?: "full" | "half";
    color?: string;
    label?: string;
}

const features: FeatureItem[] = [
    {
        iconSrc: "/section-howphantommakes/img-1.png",
        title: "Unique digital fingerprint per site",
        description: "Phantom doesn't just migrate your sites to Next.js. It gives each site a unique, hardcoded frontend. No shared wp-content/ folders. No common plugin signatures. No detectable CMS pattern. Google sees 500 independent websites, not 500 clones of the same affiliate platform. That's invisibility by design.",
        span: "half",
        className: "border-t border-l border-r border-gray-700 rounded-t-xl"
    },
    {
        iconSrc: "/section-howphantommakes/img-2.png",
        title: "30 casino-specific templates to avoid \"same design\" detection",
        description: "Even if you migrate 50 sites, you can distribute them across 30 professional templates built for casino affiliates (review pages, brand lists, comparisons, guides). Google can't fingerprint your network by design patterns because each cluster of sites looks different.",
        span: "half"
    },
    {
        title: "Proof point:",
        description: "Our own tests show Next.js affiliate sites get indexed faster and rank better than equivalent WordPress sites, because Google treats them as serious, custom-built properties, not as mass-produced affiliate templates",
        className: "px-12 border-b border-l border-r border-gray-700 rounded-b-xl"
    },
    {
        iconSrc: "/section-howphantommakes/img-3.png",
        title: "Offshore hosting for iGaming compliance",
        description: "We host your sites on distributed infrastructure across locations friendly to iGaming: Netherlands, Russia, Panama, Asia. You don't pick the server: we assign it based on your target audience and compliance needs. Need a specific location? Open a support ticket. Otherwise, we handle it.",
        span: "half"
    },
    {
        iconSrc: "/section-howphantommakes/img-4.png",
        title: "Fast migration without rebuilding from scratch",
        description: "Import your content from WordPress: posts, pages, affiliate links, metadata and choose from 30 templates. Your content stays. Your design upgrades to clean, fast Next.js. Your network becomes undetectable.",
        span: "half"
    }
];

const features2: FeatureItem[] = [
    {
        iconSrc: "/section-howphantommakes/img-1.png",
        title: "Unique digital fingerprint per site",
        description: "Phantom doesn't just migrate your sites to Next.js. It gives each site a unique, hardcoded frontend. No shared wp-content/ folders. No common plugin signatures. No detectable CMS pattern. Google sees 500 independent websites, not 500 clones of the same affiliate platform. That's invisibility by design.",
        span: "half",
        color: "#060010",

    },
    {
        iconSrc: "/section-howphantommakes/img-2.png",
        title: "30 casino-specific templates to avoid \"same design\" detection",
        description: "Even if you migrate 50 sites, you can distribute them across 30 professional templates built for casino affiliates (review pages, brand lists, comparisons, guides). Google can't fingerprint your network by design patterns because each cluster of sites looks different.",
        span: "half",
        color: "#060010",
    },
    {
        iconSrc: "/section-howphantommakes/img-3.png",
        title: "Offshore hosting for iGaming compliance",
        description: "We host your sites on distributed infrastructure across locations friendly to iGaming: Netherlands, Russia, Panama, Asia. You don't pick the server: we assign it based on your target audience and compliance needs. Need a specific location? Open a support ticket. Otherwise, we handle it.",
        span: "half",
        color: "#060010",
    },
    {
        iconSrc: "/section-howphantommakes/img-4.png",
        title: "Fast migration without rebuilding from scratch",
        description: "Import your content from WordPress: posts, pages, affiliate links, metadata and choose from 30 templates. Your content stays. Your design upgrades to clean, fast Next.js. Your network becomes undetectable.",
        span: "half",
        color: "#060010",
    }
];

export function HowPhantomWorks2() {
    return (
        <section className="relative bg-black  px-4 md:px-6 py-12 sm:py-16 md:py-20">

            <div className="max-w-7xl mx-auto relative">
                <FadeInView>
                    <div className="">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-thin text-white mb-4 leading-tight">
                            <HyperText className="font-thin " defaultStyles={false} startOnView>How Phantom makes</HyperText>

                            <span className="font-bold">Your casino sites invisible to Google's mass penalty radar.</span>
                        </h3>
                    </div>
                </FadeInView>
                <MagicBento
                    features={features2}
                    textAutoHide={true}
                    enableStars
                    enableSpotlight
                    enableBorderGlow={true}
                    enableTilt={false}
                    enableMagnetism={false}
                    clickEffect
                    spotlightRadius={400}
                    particleCount={12}
                    glowColor="132, 0, 255"
                    disableAnimations={false}
                />
            </div>
        </section>
    );
}

export function HowPhantomWorks() {
    return (
        <section className="relative bg-black  px-4 md:px-6 ">
            <div className="max-w-7xl mx-auto">
                <div className="">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-thin text-white mb-4 leading-tight">
                        <span className="font-thin ">How Phantom makes</span>
                        <br />
                        <span className="font-bold">Your casino sites invisible to Google's mass penalty radar.</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {features.map((feature, index) => {
                        if (index === 2 && features[0].proofPoint) {
                            return (
                                <div key={index} className="flex flex-col ">
                                    <p className="text-base md:text-md text-white font-medium mb-2">
                                        {features[0].proofPoint.title}
                                    </p>
                                    <p className="text-base md:text-md text-gray-400 leading-relaxed">
                                        {features[0].proofPoint.description}
                                    </p>
                                </div>
                            );

                        }

                        return (
                            <div key={index} className={feature.className || "flex flex-col border border-gray-700 p-1 rounded-xl"}>
                                <div className="flex items-center gap-2  ">
                                    {feature.iconSrc && (
                                        <Image
                                            src={feature.iconSrc}
                                            alt={feature.title}
                                            width={80}
                                            height={80}
                                            className="object-cover"
                                        />
                                    )}
                                    <h4 className={feature.span === "half" ? "text-lg font-normal text-white leading-tight" : "text-lg font-normal text-white leading-tight pl-4"}>
                                        {feature.title}
                                    </h4>

                                </div>

                                <p className="text-base md:text-md text-gray-400 leading-relaxed mb-4 pl-4">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
