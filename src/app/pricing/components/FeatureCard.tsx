import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import React from "react";

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <div className="group relative p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-white/10 bg-black/40 hover:border-purple-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <NeonGradientCard>
                    {icon}
                </NeonGradientCard>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">{title}</h3>
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/60 font-light leading-relaxed">
                {description}
            </p>
        </div>
    );
}
