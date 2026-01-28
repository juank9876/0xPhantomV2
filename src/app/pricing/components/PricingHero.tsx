export default function PricingHero() {
    return (
        <section className="relative pt-20 sm:pt-24 md:pt-28 bg-black overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6">
                        <span className="text-white">Pricing per site.</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400">
                            No surprises.
                        </span>
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-thin text-white/60 max-w-3xl mx-auto">
                        Start with your most important site on a low-risk plan. Upgrade when traffic justifies it. Move more sites when Phantom proves itself.
                    </p>
                </div>
            </div>
        </section>
    );
}
