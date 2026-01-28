import React from "react";

interface CapacityCardProps {
    title: string;
    price: string;
    subtitle?: string;
    discount?: string;
    description?: string;
    pricePerTime?: string;
    highlighted?: boolean;
}

export default function CapacityCard({
    title,
    price,
    subtitle,
    discount,
    description,
    pricePerTime,
    highlighted = false
}: CapacityCardProps) {
    return (
        <div
            className={`relative p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border transition-all duration-300 ${highlighted
                ? "pro-card border-purple-500/30 hover:border-purple-500/50"
                : "bg-black/40 border-white/10 hover:border-white/20"
                }`}
        >
            <div className="mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl md:text-2xl text-white mb-2">{title}</h3>
                <hr className="border-t border-white/10 my-3 sm:my-4" />
            </div>

            <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl sm:text-3xl md:text-4xl font-light text-white">{price}</span>
                {pricePerTime && (
                    <span className="text-base sm:text-lg md:text-xl font-light text-white/60">{pricePerTime}</span>
                )}
            </div>

            <div className="flex items-center gap-2 mb-2">
                {subtitle && (
                    <span className="text-xs text-white/40">{subtitle}</span>
                )}
                {discount && (
                    <span className="text-xs text-pink-900">({discount})</span>
                )}
            </div>

            {description && (
                <p className="text-xs sm:text-sm text-white/60">{description}</p>
            )}
        </div>
    );
}
