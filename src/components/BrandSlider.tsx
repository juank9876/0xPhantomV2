"use client";

import Image from "next/image";

export default function BrandSlider() {
    const brands = [
        { name: "Betting Expert", logo: "/slider-icons/bettingexpert.svg" },
        { name: "BetXpert", logo: "/slider-icons/betxpert.svg" },
        { name: "Bonus", logo: "/slider-icons/bonus.svg" },
        { name: "LeoVegas", logo: "/slider-icons/leovegas.svg" },
        { name: "Rotowire", logo: "/slider-icons/rotowire.svg" },
        { name: "Time2Playes", logo: "/slider-icons/time2playes.svg" },
        { name: "VegasInsider", logo: "/slider-icons/vegasinsider.svg" },
    ];

    const duplicatedBrands = [...brands, ...brands, ...brands];

    return (
        <section className="relative bg-black py-4 sm:py-5 md:py-6 overflow-hidden px-2 sm:px-4 md:px-12 lg:px-20">
            <div className="flex flex-row items-center gap-3 md:gap-4 lg:gap-5 w-full">

                <div className="relative flex overflow-hidden group w-full">
                    <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
                    <div className="flex items-center gap-2 sm:gap-3 animate-scroll group-hover:pause-animation">
                        {duplicatedBrands.map((brand, index) => (
                            <BrandItem key={index} brand={brand} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

function BrandItem({ brand }: { brand: { name: string; logo: string } }) {
    return (
        <div className="flex items-center justify-center mx-4 sm:mx-6 md:mx-8 flex-shrink-0">
            <Image
                src={brand.logo}
                alt={brand.name}
                width={240}
                height={90}
                className="object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 w-24 h-12 sm:w-20 sm:h-10 md:w-24 md:h-12 lg:w-28 lg:h-14 xl:w-[120px] xl:h-[60px]"
            />
        </div>
    );
}
