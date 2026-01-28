import { FileEdit, CreditCard, Receipt, TrendingUp } from "lucide-react";
import FeatureCard from "./FeatureCard";

export default function HowPricingWorks() {
    const iconSize = 32;
    const features = [
        {
            icon: <FileEdit size={iconSize} />,
            title: "Draft-first rule",
            description: "Build your site for FREE in draft mode. You only start paying when you publish live on your own domain.",
        },
        {
            icon: <TrendingUp size={iconSize} />,
            title: "Tier = MAX (visitors, pages)",
            description: "Your tier is determined by whichever limit you hit first—visitors OR pages. 10% tolerance before upgrade.",
        },
        {
            icon: <CreditCard size={iconSize} />,
            title: "Pay with card or crypto",
            description: "Stripe for card payments. Cryptomus for 200+ cryptocurrencies. Your choice.",
        },
        {
            icon: <Receipt size={iconSize} />,
            title: "Invoice or receipt",
            description: "Need a fiscal invoice? We'll ask for your tax details. Prefer no invoice? We issue a simple receipt.",
        },
    ];

    return (
        <section className="py-8 sm:py-12 md:py-16 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 md:mb-10">
                        How pricing works
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
