import { DatabaseZap, FileText, MessageCircleQuestion, PanelsTopLeft, User } from "lucide-react";
import PricingCard from "./PricingCard";
import { links } from "@/data/links";

export default function PricingGrid() {
    const plans = [
        {
            name: "Starter",
            description: "For new site testing",
            price: "29€",
            period: "/month",
            features: [
                { text: "Up to 2,500 visitors/month", icon: <User fill="#ffffff" /> },
                { text: "Up to 50 pages/posts", icon: <FileText /> },
                { text: "1 site", icon: <PanelsTopLeft /> },
                { text: "Offshore hosting included", icon: <DatabaseZap /> },
                { text: "Standard support", icon: <MessageCircleQuestion /> },
            ],
            buttonText: "Start with Starter",
            link: links.startWithStarter,
            highlighted: false,
        },
        {
            name: "Growth",
            description: "For sites with traction",
            price: "149€",
            period: "/month",
            features: [
                { text: "Up to 10,000 visitors/month", icon: <User fill="#ffffff" /> },
                { text: "Up to 300 pages/posts", icon: <FileText /> },
                { text: "1 site", icon: <PanelsTopLeft /> },
                { text: "Offshore hosting included", icon: <DatabaseZap /> },
                { text: "Priority support", icon: <MessageCircleQuestion /> },
            ],
            buttonText: "Start with Growth",
            link: links.startWithGrowth,
            highlighted: true,
        },
        {
            name: "Pro",
            description: "For money sites",
            price: "297€",
            period: "/month",
            features: [
                { text: "Up to 35,000 visitors/month", icon: <User fill="#ffffff" /> },
                { text: "Up to 1,500 pages/posts", icon: <FileText /> },
                { text: "1 site", icon: <PanelsTopLeft /> },
                { text: "Offshore hosting included", icon: <DatabaseZap /> },
                { text: "Priority support", icon: <MessageCircleQuestion /> },
            ],
            buttonText: "Start with Pro",
            link: links.startWithPro,
            highlighted: false,
        },
        {
            name: "Scale",
            description: "For large portfolios",
            price: "497€",
            period: "/month",
            features: [
                { text: "Up to 80,000 visitors/month", icon: <User fill="#ffffff" /> },
                { text: "Up to 5,000 pages/posts", icon: <FileText /> },
                { text: "1 site", icon: <PanelsTopLeft /> },
                { text: "Offshore hosting included", icon: <DatabaseZap /> },
                { text: "Priority support", icon: <MessageCircleQuestion /> },
            ],
            buttonText: "Start with Scale",
            link: links.startWithScale,
            highlighted: false,
        },
        {
            name: "Enterprise",
            description: "For large portfolios",
            price: "Custom",
            period: "",
            features: [
                { text: "80,000+ visitors/month", icon: <User fill="#ffffff" /> },
                { text: "5,000+ pages/posts", icon: <FileText /> },
                { text: "Multiple sites", icon: <PanelsTopLeft /> },
                { text: "Custom hosting config", icon: <DatabaseZap /> },
                { text: "Dedicated support", icon: <MessageCircleQuestion /> },
            ],
            buttonText: "Contact us",
            link: links.startWithEnterprise,
            highlighted: false,
        },
    ];

    return (
        <section className="py-8 sm:py-12 md:py-16 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Carousel horizontal para móvil y tablet */}
                <div className="lg:hidden relative">
                    <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide px-2">
                        {plans.map((plan) => (
                            <div key={plan.name} className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[45vw] snap-center">
                                <PricingCard
                                    name={plan.name}
                                    description={plan.description}
                                    price={plan.price}
                                    period={plan.period}
                                    features={plan.features}
                                    buttonText={plan.buttonText}
                                    link={plan.link}
                                    highlighted={plan.highlighted}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Grid para desktop */}
                <div className="hidden lg:grid grid-cols-5 gap-4 max-w-7xl mx-auto">
                    {plans.map((plan) => (
                        <PricingCard
                            link={plan.link}
                            key={plan.name}
                            name={plan.name}
                            description={plan.description}
                            price={plan.price}
                            period={plan.period}
                            features={plan.features}
                            buttonText={plan.buttonText}
                            highlighted={plan.highlighted}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
