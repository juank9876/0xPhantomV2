import { Check } from "lucide-react";
import React from "react";

interface Feature {
    text: string;
    icon?: React.ReactNode;
}

interface PricingCardProps {
    name: string;
    description: string;
    price: string;
    period: string;
    features: Feature[];
    buttonText: string;
    link: string;
    highlighted?: boolean;
}

export default function PricingCard({
    name,
    description,
    price,
    period,
    features,
    buttonText,
    link,
    highlighted = false,
}: PricingCardProps) {
    return (
        <div
            className={`relative flex flex-col justify-between p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl border transition-all duration-300 ${highlighted
                ? "bg-gradient-to-b from-purple-900/20 pro-card to-transparent border-purple-500/30 hover:border-purple-500/50"
                : "bg-black/40 border-white/10 hover:border-white/20 normal-card"
                }`}
        >
            <div className="mb-4 sm:mb-5 md:mb-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-1.5 sm:mb-2">{name}</h3>
                <p className="text-xs sm:text-sm text-white/60">{description}</p>
            </div>

            <div className="mb-4 sm:mb-6 md:mb-8 border-y border-white/20 py-3 sm:py-4">
                <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-light text-white">{price}</span>
                    <span className="text-gray-400 text-xs sm:text-sm md:text-base">{period}</span>
                </div>
            </div>

            <ul className="space-y-2.5 sm:space-y-3 md:space-y-4 mb-4 sm:mb-6 md:mb-8">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <div className="flex-shrink-0 flex justify-center w-4 h-4 text-gray-200">
                            {feature.icon && React.isValidElement(feature.icon) ? (
                                React.cloneElement(feature.icon as React.ReactElement, {
                                    size: 16,
                                    className: "w-4 h-4"
                                })
                            ) : (
                                feature.icon
                            )}
                        </div>
                        <span className="text-xs sm:text-sm text-gray-300">{feature.text}</span>
                    </li>
                ))}
            </ul>

            <a
                href={link}
                className={`text-center w-full py-2 sm:py-2.5 px-3 sm:px-4 rounded-full text-xs sm:text-sm font-light transition-all duration-300 ${highlighted
                    ? " bg-[#992953] text-white hover:bg-[#992953]/80"
                    : "bg-white/10 text-white border border-white/10 hover:bg-white/15 "
                    }`}
            >
                {buttonText}
            </a>
        </div>
    );
}
