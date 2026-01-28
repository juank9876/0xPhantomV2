"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

const pricingFaqData: FAQItem[] = [
    {
        question: "Can I try before I pay?",
        answer: "Yes. Create an account for free, build your entire site in draft mode, test everything. You only pay when you publish live on your domain."
    },
    {
        question: "What happens if I exceed my limits?",
        answer: "We give you 10% tolerance. If you consistently exceed, we'll notify you at 50%, 80%, and 90%. You can buy an addon pack or upgrade your tier."
    },
    {
        question: "Can I pay with cryptocurrency?",
        answer: "Yes. We accept 200+ cryptocurrencies via Cryptomus. Note: crypto payments require manual renewal each month (no auto-subscription)."
    },
    {
        question: "Do you offer refunds?",
        answer: "Since you can test everything for free before paying, we don't offer refunds after publishing. But Founding Customers get extra guarantees—ask us."
    }
];

export default function PricingFAQ() {
    const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

    const toggleFAQ = (index: number) => {
        setOpenIndexes(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <section className="relative bg-black py-8 sm:py-12 md:py-16 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-6 sm:mb-8 md:mb-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                        Pricing questions
                    </h2>
                </div>

                <div className="space-y-3 sm:space-y-4">
                    {pricingFaqData.map((faq: FAQItem, index: number) => (
                        <div key={index} className="rounded-lg sm:rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/20">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left p-4 sm:p-5 md:p-6 lg:p-8 flex items-start justify-between gap-3 sm:gap-4 hover:bg-white/5 transition-all duration-300 group"
                            >
                                <h3 className="text-base sm:text-lg md:text-xl text-white font-normal pr-2 sm:pr-4">
                                    {faq.question}
                                </h3>
                                <span className="text-gray-400 text-2xl flex-shrink-0 mt-1">
                                    {openIndexes.includes(index) ? <ChevronUp /> : <ChevronDown />}
                                </span>
                            </button>

                            {openIndexes.includes(index) && (
                                <div className="px-4 sm:px-5 md:px-6 lg:px-8 pb-4 sm:pb-5 md:pb-6 lg:pb-8">
                                    <p className="text-sm sm:text-base md:text-lg text-white/60 leading-relaxed font-light">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
