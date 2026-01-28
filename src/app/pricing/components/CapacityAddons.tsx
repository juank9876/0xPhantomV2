import CapacityCard from "./CapacityCard";

export default function CapacityAddons() {
    const visitorPacks = [
        {
            title: "+5,000 visitors/month",
            price: "29€",
            subtitle: "5.80€ per 1K visitors",
        },
        {
            title: "+15,000 visitors/month",
            price: "69€",
            subtitle: "4.60€ per 1K visitors",
            discount: "20% off",
        },
        {
            title: "+30,000 visitors/month",
            price: "119€",
            subtitle: "3.97€ per 1K visitors",
            discount: "32% off",
        },
    ];

    const pagePacks = [
        {
            title: "+500 pages",
            price: "29€",
            subtitle: "One-time capacity boost",
        },
        {
            title: "+1,500 pages",
            price: "69€",
            discount: "20% off",
        },
        {
            title: "+3,000 pages",
            price: "119€",
            discount: "32% off",
        },
    ];

    const services = [
        {
            title: "Priority Support",
            price: "49€",
            subtitle: "/month",
            description: "Direct access to our team. Response in less than 24h.",
            highlighted: true,
        },
        {
            title: "Migration Hands-on",
            price: "299€",
            subtitle: "one time",
            description: "We handle your WordPress migration for you. Not self-service.",
            highlighted: false,
        },
    ];

    return (
        <section className="py-8 sm:py-12 md:py-16 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-6 sm:mb-8 md:mb-10">
                        <h2 className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                            <span className="">Need more? Add capacity without upgrading.</span>
                            <br />
                            <span className="font-thin">Temporary packs for traffic spikes or content growth. Buy what you need, when you need it.</span>
                        </h2>

                    </div>

                    {/* Visitor Packs - Carousel para móvil/tablet */}
                    <div className="md:hidden relative mb-3 sm:mb-4">
                        <div className="flex overflow-x-auto gap-3 sm:gap-4 pb-4 snap-x snap-mandatory scrollbar-hide px-2">
                            {visitorPacks.map((pack, index) => (
                                <div key={index} className="flex-shrink-0 w-[85vw] sm:w-[70vw] snap-center">
                                    <CapacityCard
                                        title={pack.title}
                                        price={pack.price}
                                        subtitle={pack.subtitle}
                                        discount={pack.discount}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Visitor Packs - Grid para desktop */}
                    <div className="hidden md:grid grid-cols-3 gap-4 mb-4">
                        {visitorPacks.map((pack, index) => (
                            <CapacityCard
                                key={index}
                                title={pack.title}
                                price={pack.price}
                                subtitle={pack.subtitle}
                                discount={pack.discount}
                            />
                        ))}
                    </div>

                    {/* Page Packs - Carousel para móvil/tablet */}
                    <div className="md:hidden relative mb-3 sm:mb-4">
                        <div className="flex overflow-x-auto gap-3 sm:gap-4 pb-4 snap-x snap-mandatory scrollbar-hide px-2">
                            {pagePacks.map((pack, index) => (
                                <div key={index} className="flex-shrink-0 w-[85vw] sm:w-[70vw] snap-center">
                                    <CapacityCard
                                        title={pack.title}
                                        price={pack.price}
                                        subtitle={pack.subtitle}
                                        discount={pack.discount}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Page Packs - Grid para desktop */}
                    <div className="hidden md:grid grid-cols-3 gap-4 mb-4">
                        {pagePacks.map((pack, index) => (
                            <CapacityCard
                                key={index}
                                title={pack.title}
                                price={pack.price}
                                subtitle={pack.subtitle}
                                discount={pack.discount}
                            />
                        ))}
                    </div>

                    {/* Services - Carousel para móvil/tablet */}
                    <div className="md:hidden relative">
                        <div className="flex overflow-x-auto gap-3 sm:gap-4 pb-4 snap-x snap-mandatory scrollbar-hide px-2">
                            {services.map((service, index) => (
                                <div key={index} className="flex-shrink-0 w-[85vw] sm:w-[70vw] snap-center">
                                    <CapacityCard
                                        title={service.title}
                                        price={service.price}
                                        pricePerTime={service.subtitle}
                                        description={service.description}
                                        highlighted={service.highlighted}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Services - Grid para desktop */}
                    <div className="hidden md:grid grid-cols-2 gap-4">
                        {services.map((service, index) => (
                            <CapacityCard
                                key={index}
                                title={service.title}
                                price={service.price}
                                pricePerTime={service.subtitle}
                                description={service.description}
                                highlighted={service.highlighted}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
