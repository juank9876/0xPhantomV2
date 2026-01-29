"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import FadeInView from "@/components/FadeInView";
import { SvgIcon } from "./ui/svg-icon";
import { motion, AnimatePresence } from "motion/react";
import { HyperText } from "./ui/hyper-text";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    title?: string;
    subtitle?: string;
    data?: FAQItem[];
}

const defaultFaqData: FAQItem[] = [
    {
        question: "How does Phantom actually make my sites 'invisible' to Google?",
        answer: "Phantom doesn't hide your sites from Google—it removes the shared technical fingerprint that WordPress leaves. Every WordPress site has folders like \"wp-content/\" and \"wp-includes/\" that Google's crawlers recognize. When you run hundreds of sites on WordPress, Google knows they're all using the same CMS—even if they're on different domains.\n\nPhantom gives each site a unique, hardcoded Next.js frontend. No shared folders. No plugin signatures. No detectable CMS pattern. Google sees 500 independent, custom-built websites—not 500 clones of an affiliate platform. That's how you avoid mass penalties."
    },
    {
        question: "Won't Google detect that I moved 50 sites to the same new CMS?",
        answer: "No—because Phantom isn't a traditional CMS. Each site gets its own hardcoded Next.js build with one of 30 different templates. Google can't fingerprint \"Phantom\" the way it can fingerprint WordPress, because there's no shared code signature across sites. Even if you migrate 500 sites, Google sees them as 500 unrelated, custom-built properties."
    },
    {
        question: "Will I lose my current design?",
        answer: "Yes and no. Your content (posts, pages, affiliate links) imports perfectly. But you'll choose one of our 30 professional templates instead of keeping your WordPress theme. Why? Because WordPress themes are slow, bloated, and—most importantly—they leave detectable fingerprints. Our Next.js templates are faster, cleaner, and built to be undetectable by Google's CMS-detection algorithms."
    },
    {
        question: "Is this complicated to use?",
        answer: "No. The backend is intentionally designed to look and feel like WordPress. If your team can update a WordPress post, they can use Phantom. No code required. No server management. Just log in, update content, publish."
    },
    {
        question: "What about analytics and tracking?",
        answer: "Phantom has basic analytics built in. You can also add your own Google Analytics, Facebook Pixel, or any custom tracking script via the dashboard. For advanced affiliate analytics (clicks per operator, conversion tracking, offer performance), you can optionally integrate with BrandListy—our separate affiliate management tool (sold separately, requires second login)."
    },
    {
        question: "What if I need my site hosted in a specific location?",
        answer: "We assign hosting locations automatically based on your target audience and compliance needs (e.g., UK sites → Netherlands or Russia). If you need a specific location for regulatory or performance reasons, just open a support ticket and we'll handle it."
    }
];

export default function FAQ({ title = "Common questions", subtitle = "before you move your first site.", data = defaultFaqData }: FAQProps) {
    const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

    const toggleFAQ = (index: number) => {
        setOpenIndexes(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <section className="relative bg-black pt-20 px-4 md:px-6 overflow-hidden py-40">
            <div className="absolute top-100 right-20 h-0 pointer-events-none">
                <SvgIcon
                    src="/bg-icons/icon_dice.svg"
                    className="absolute  w-48 lg:w-96 h-40 md:h-48 lg:h-96 scale-200 xl:opacity-20 opacity-10 pointer-events-none z-0 "
                    alt=""
                />
            </div>
            <div className="max-w-7xl mx-auto relative">
                <FadeInView>
                    <div className="mb-8">
                        <h4 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                            <span className="font-bold">{title}</span>
                            {subtitle && (
                                <HyperText defaultStyles={false} className="font-thin">{subtitle}</HyperText>

                            )}
                        </h4>
                    </div>
                </FadeInView>

                <div className="space-y-4">
                    {data.map((faq: FAQItem, index: number) => (
                        <FadeInView key={index} delay={0.1 * index}>
                            <div className="rounded-xl border border-t-white/30 border-l-white/30 border-b-gray-800 bg-black/40 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-gray-700 hover:shadow-lg hover:shadow-purple-900/20">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full border-b border-gray-800 text-left p-6 md:p-8 flex items-start justify-between gap-4 hover:bg-white/5 transition-all duration-300 group"
                                >
                                    <h3 className="text-lg md:text-xl text-white font-medium pr-4 transition-colors duration-300 group-hover:text-violet-300">
                                        {faq.question}
                                    </h3>
                                    <motion.span
                                        className="text-gray-400 text-2xl shrink-0 mt-1 transition-colors duration-300 group-hover:text-violet-300"
                                        animate={{ rotate: openIndexes.includes(index) ? 180 : 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <ChevronDown />
                                    </motion.span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {openIndexes.includes(index) && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                                transition: {
                                                    height: { duration: 0.3, ease: "easeInOut" },
                                                    opacity: { duration: 0.25, delay: 0.1 }
                                                }
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0,
                                                transition: {
                                                    height: { duration: 0.3, ease: "easeInOut" },
                                                    opacity: { duration: 0.2 }
                                                }
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 md:px-8 py-4 md:py-6 ">
                                                <p className="text-base md:text-md text-gray-400/90 leading-relaxed whitespace-pre-line">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </FadeInView>
                    ))}
                </div>
            </div>
        </section>
    );
}
