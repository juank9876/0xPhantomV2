import { links } from "@/data/links";

export default function DoneForYou() {
    return (
        <section className="relative py-8 sm:py-12 md:py-16 bg-black overflow-hidden">
            {/* Gradient blur effects */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-[150px] opacity-30" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-l from-purple-600 to-pink-600 rounded-full blur-[150px] opacity-30" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-center">

                        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 sm:mb-4 md:mb-5 block">Don't want to touch setup at all?</span>
                        <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-thin block mb-3 sm:mb-4 md:mb-5">We design and build a full casino affiliate <br className="hidden sm:block" /> site for you.</span>

                        <hr />
                        <div className="my-4 sm:my-5 md:my-6">
                            <div className="flex items-baseline justify-center gap-2 mb-2">
                                <span className="text-2xl sm:text-3xl md:text-4xl font-light text-white">
                                    5,000 ~ 6,000€
                                </span>
                                <span className="text-sm sm:text-base md:text-lg font-light text-gray-400">one time</span>
                            </div>
                        </div>

                        <p className="text-sm sm:text-base md:text-lg text-white mb-6 sm:mb-7 md:mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                            Complete site creation by our team: custom design, content migration, template customization, and launch. On top of your monthly plan.
                        </p>

                        <a href={links.contactDoneForYou} target="_blank" rel="noopener noreferrer" className="button-pro text-white px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base">
                            Contact for Done-for-you
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
