import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Clock, Earth, Globe, LucideGlobe, Mail, MailPlus, MessageCircle, Rocket, User, WholeWord } from "lucide-react";
import ContactForm from "./components/form";
import FAQ from "@/components/FAQ";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Metadata } from "next";
import { links } from "@/data/links";

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
    },
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background text-foreground dark">
            <Header />

            <main className="bg-black">


                {/* New Hero Section with Cards */}
                <section className="pb-8 sm:pb-12 md:pb-16 bg-black px-4 pt-20 sm:pt-24 md:pt-28">
                    <div className="max-w-5xl mx-auto text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                            Talk to us about your
                            <br />
                            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                casino affiliate portfolio.
                            </span>
                        </h1>
                        <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl font-thin mx-auto">
                            Whether you want to migrate 1 site or 100, we're here to help you understand if Phantom is the right fit for your network.
                        </p>
                    </div>

                    {/* Contact Cards */}
                    <div className="max-w-7xl mx-auto">
                        {/* Carousel horizontal para móvil y tablet */}
                        <div className="md:hidden relative">
                            <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide px-2">
                                {/* Talk to Sales Card */}
                                <div className="flex-shrink-0 w-[85vw] sm:w-[70vw] snap-center">
                                    <div className="bg-gradient-to-b from-white/6 via-stone-700 to-white/6 border border-gray-700 rounded-xl sm:rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-gray-600 hover:shadow-lg hover:shadow-gray-900/50 hover:-translate-y-1 transition-all duration-300 h-full">
                                        <div className="mb-6 sm:mb-8">
                                            <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-3">Talk to Sales</h3>
                                            <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                                                Want to discuss migration, pricing, or enterprise plans? Fill out the form and we'll get back to you within 24h.
                                            </p>
                                        </div>
                                        <Button
                                            className="w-full text-sm sm:text-base py-3 sm:py-4 bg-white/5 text-white hover:bg-white/10 rounded-full font-medium transition-all"
                                            asChild
                                        >
                                            <a href={links.talkToSales} target="_blank" rel="noopener noreferrer">Contact Sales</a>
                                        </Button>
                                    </div>
                                </div>

                                {/* Apply for Founding Customer Card */}
                                <div className="flex-shrink-0 w-[85vw] sm:w-[70vw] snap-center">
                                    <div className="bg-gradient-to-t from-pink-950/70 via-purple-950/50 to-white/2 border border-pink-800/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-pink-800 hover:shadow-lg hover:shadow-pink-900/50 hover:-translate-y-1 hover:from-pink-950/80 hover:via-purple-950/60 transition-all duration-300 h-full">
                                        <div className="mb-6 sm:mb-8">
                                            <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-3">Apply for Founding Customer</h3>
                                            <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                                                Be one of our first 3 customers. Get 30% off for 6 months + migration included + priority support.
                                            </p>
                                        </div>
                                        <Button
                                            className="w-full py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r bg-[#992953]/90 text-white hover:bg-[#992953]/50 rounded-full font-medium transition-all"
                                            asChild
                                        >
                                            <a href={links.applyForFoundingCustomer} target="_blank" rel="noopener noreferrer">Apply Now</a>
                                        </Button>
                                    </div>
                                </div>

                                {/* Technical Support Card */}
                                <div className="flex-shrink-0 w-[85vw] sm:w-[70vw] snap-center">
                                    <div className="bg-gradient-to-b from-white/6 via-stone-700 to-white/6 border border-gray-700 rounded-xl sm:rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-gray-600 hover:shadow-lg hover:shadow-gray-900/50 hover:-translate-y-1 transition-all duration-300 h-full">
                                        <div className="mb-6 sm:mb-8">
                                            <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-3">Technical Support</h3>
                                            <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                                                Already a customer? Need help with your account or sites? Access our support portal.
                                            </p>
                                        </div>
                                        <Button
                                            className="w-full text-sm sm:text-base py-3 sm:py-4 bg-white/5 text-white hover:bg-white/10 rounded-full font-medium transition-all"
                                            asChild
                                        >
                                            <a href={links.technicalSupport} target="_blank" rel="noopener noreferrer">Go to Support</a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Grid para desktop */}
                        <div className="hidden md:grid grid-cols-3 gap-4">
                            {/* Talk to Sales Card */}
                            <div className="bg-gradient-to-b from-white/6 via-stone-700 to-white/6 border border-gray-700 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col justify-between hover:border-gray-600 hover:shadow-lg hover:shadow-gray-900/50 hover:-translate-y-1 transition-all duration-300">
                                <div className="mb-6 sm:mb-8 md:mb-12">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-white mb-2 sm:mb-3">Talk to Sales</h3>
                                    <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                                        Want to discuss migration, pricing, or enterprise plans? Fill out the form and we'll get back to you within 24h.
                                    </p>
                                </div>
                                <Button
                                    className="w-full text-sm sm:text-base py-3 sm:py-4 md:py-5 bg-white/5 text-white hover:bg-white/10 rounded-full font-medium transition-all"
                                    asChild
                                >
                                    <a href="#contact-form">Contact Sales</a>
                                </Button>
                            </div>

                            {/* Apply for Founding Customer Card */}
                            <div className="bg-gradient-to-t from-pink-950/70 via-purple-950/50 to-white/2 border border-pink-800/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col justify-between hover:border-pink-800 hover:shadow-lg hover:shadow-pink-900/50 hover:-translate-y-1 hover:from-pink-950/80 hover:via-purple-950/60 transition-all duration-300">
                                <div className="mb-6 sm:mb-8 md:mb-12">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-white mb-2 sm:mb-3">Apply for Founding Customer</h3>
                                    <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                                        Be one of our first 3 customers. Get 30% off for 6 months + migration included + priority support.
                                    </p>
                                </div>
                                <Button
                                    className="w-full py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r bg-[#992953]/90 text-white hover:bg-[#992953]/50 rounded-full font-medium transition-all"
                                    asChild
                                >
                                    <a href="#apply">Apply Now</a>
                                </Button>
                            </div>

                            {/* Technical Support Card */}
                            <div className="bg-gradient-to-b from-white/6 via-stone-700 to-white/6 border border-gray-700 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col justify-between hover:border-gray-600 hover:shadow-lg hover:shadow-gray-900/50 hover:-translate-y-1 transition-all duration-300">
                                <div className="mb-6 sm:mb-8 md:mb-12">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-white mb-2 sm:mb-3">Technical Support</h3>
                                    <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                                        Already a customer? Need help with your account or sites? Access our support portal.
                                    </p>
                                </div>
                                <Button
                                    className="w-full text-sm sm:text-base py-3 sm:py-4 md:py-5 bg-white/5 text-white hover:bg-white/10 rounded-full font-medium transition-all"
                                    asChild
                                >
                                    <a href="#support">Go to Support</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Forms Section */}
                <section className="pb-8 sm:pb-12 md:pb-16 lg:pb-24 bg-black">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto">

                            {/* Contact Sales Form */}
                            <ContactForm />

                            {/* Right Column - Info Cards */}
                            <div className="space-y-3 sm:space-y-4 h-full flex flex-col">
                                {/* Email us directly */}
                                <div className="bg-transparent border border-white/20 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
                                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                        <MailPlus className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                        <h2 className="text-lg sm:text-xl md:text-2xl font-light text-white">Email us directly</h2>
                                    </div>
                                    <p className="text-white/60 text-sm sm:text-base md:text-lg lg:text-xl mb-2">Prefer email?</p>
                                    <a href={links.emailUsDirectly} target="_blank" rel="noopener noreferrer" className="text-pink-900 hover:text-pink-300 transition-colors text-sm sm:text-base md:text-lg lg:text-xl">
                                        hello@0xphantom.com
                                    </a>
                                </div>

                                {/* Response time */}
                                <div className="bg-transparent border border-white/20 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
                                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                        <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                        <h2 className="text-lg sm:text-xl md:text-2xl font-light text-white">Response time</h2>
                                    </div>
                                    <p className="text-white/60 text-sm sm:text-base md:text-lg lg:text-xl mb-2">
                                        We typically respond within 24 hours on business days.
                                    </p>
                                    <p className="text-pink-900 text-sm sm:text-base md:text-lg lg:text-xl">
                                        Founding Customer applicants get priority.
                                    </p>
                                </div>

                                {/* Our timezone */}
                                <div className="bg-transparent border border-white/20 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
                                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                        <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                        <h2 className="text-lg sm:text-xl md:text-2xl font-light text-white">Our timezone</h2>
                                    </div>
                                    <p className="text-white/60 text-sm sm:text-base md:text-lg lg:text-xl">
                                        Team based in Spain (CET/CEST).<br />
                                        We work with clients worldwide.
                                    </p>
                                </div>

                                {/* Founding Customer spots */}
                                <div className="h-full bg-gradient-to-t from-pink-950/70 via-purple-950/50 to-white/2 border border-b-pink-800/30 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 justify-between flex flex-col pb-12 sm:pb-16 md:pb-24">
                                    <div className="flex items-center gap-2 sm:gap-3 ">
                                        <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                        <h2 className="text-lg sm:text-xl md:text-2xl font-light text-white">Founding Customer spots</h2>
                                    </div>
                                    <span className="text-xl sm:text-3xl md:text-4xl font-bold text-pink-800">3 left</span>
                                    <ul className="space-y-1.5 sm:space-y-2 text-white/60 text-sm sm:text-base md:text-lg lg:text-xl">
                                        <li>30% off for 6 months</li>
                                        <li>Migration included</li>
                                        <li>Priority support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What happens after you contact us */}
                <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-black px-4">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-start">
                            What happens after you contact us?
                        </h2>
                        <WavyBackground
                            speed="slow"
                            waveOpacity={1}
                            blur={15}
                            waveWidth={50}
                            className=""
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                                {/* Step 1 */}
                                <div className="bg-black/70 border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:border-white/20 transition-all duration-300 text-center">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white/30 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 mx-auto relative">
                                        <div className="absolute inset-0 rounded-full bg-purple-500/60 blur-xl"></div>
                                        <span className="text-white text-lg sm:text-xl font-semibold relative z-10">1</span>
                                    </div>
                                    <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">We review</h3>
                                    <hr className="border-white/10 mb-3 sm:mb-4" />
                                    <p className="text-white/60 text-sm sm:text-base font-thin leading-relaxed">
                                        We read your submission and prepare relevant answers.
                                    </p>
                                </div>

                                {/* Step 2 */}
                                <div className="bg-black/70 border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:border-white/20 transition-all duration-300 text-center">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white/30 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 mx-auto relative">
                                        <div className="absolute inset-0 rounded-full bg-indigo-500/60 blur-xl"></div>
                                        <span className="text-white text-lg sm:text-xl font-semibold relative z-10">2</span>
                                    </div>
                                    <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">Email response</h3>
                                    <hr className="border-white/10 mb-3 sm:mb-4" />
                                    <p className="text-white/60 text-sm sm:text-base font-thin leading-relaxed">
                                        Within 24h, we'll send initial thoughts and answer questions.
                                    </p>
                                </div>

                                {/* Step 3 */}
                                <div className="bg-black/70 border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:border-white/20 transition-all duration-300 text-center">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white/30 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 mx-auto relative">
                                        <div className="absolute inset-0 rounded-full bg-violet-500/60 blur-xl"></div>
                                        <span className="text-white text-lg sm:text-xl font-semibold relative z-10">3</span>
                                    </div>
                                    <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">Discovery call</h3>
                                    <hr className="border-white/10 mb-3 sm:mb-4" />
                                    <p className="text-white/60 text-sm sm:text-base font-thin leading-relaxed">
                                        If there's a fit, we schedule a 30 min call to understand your needs.
                                    </p>
                                </div>

                                {/* Step 4 */}
                                <div className="bg-black/70 border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:border-white/20 transition-all duration-300 text-center">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white/30 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 mx-auto relative">
                                        <div className="absolute inset-0 rounded-full bg-pink-500/60 blur-xl"></div>
                                        <span className="text-white text-lg sm:text-xl font-semibold relative z-10">4</span>
                                    </div>
                                    <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">Pilot proposal</h3>
                                    <hr className="border-white/10 mb-3 sm:mb-4" />
                                    <p className="text-white/60 text-sm sm:text-base font-thin leading-relaxed">
                                        We propose starting with 1 pilot site to prove value.
                                    </p>
                                </div>
                            </div>
                        </WavyBackground>
                    </div>
                </section>

                <FAQ
                    title="Common questions"
                    subtitle=""
                    data={[
                        {
                            question: "Do you offer demos?",
                            answer: "Yes. After an initial conversation, we can show you the product live. We can also give you access to build a draft site for free so you can test it yourself."
                        },
                        {
                            question: "Can you sign an NDA?",
                            answer: "Yes. We understand affiliate businesses value discretion. We're happy to sign an NDA before discussing your specific sites or networks."
                        },
                        {
                            question: "I manage sites for multiple clients. Can we talk about agency pricing?",
                            answer: "Absolutely. If you manage 10+ sites across different clients, we can discuss volume pricing and white-label options. Mention this in your message."
                        },
                        {
                            question: "What languages do you support?",
                            answer: "Our team speaks English and Spanish fluently. We can also communicate in Portuguese and Italian if needed."
                        }
                    ]}
                />

                {/* Not ready to fill out a form */}
                <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-black px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-2 sm:mb-8 md:mb-10 lg:mb-12 flex flex-col gap-0 lg:gap-5">
                            <span className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white ">Not ready to fill out a form?</span>
                            <span className="font-thin text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white ">Sometimes you just want to ask a quick question.
                                <br />
                                Here are other ways to reach us:
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                            {/* Email Card */}
                            <a
                                href="mailto:hello@0xphantom.com"
                                className="group bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:border-white/20 hover:from-white/8 transition-all duration-300 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                    <span className="text-white text-base sm:text-lg md:text-xl font-medium">Email</span>
                                </div>
                                <span className="text-pink-900 text-sm sm:text-base md:text-lg font-medium group-hover:text-pink-400 transition-colors">
                                    hello@0xphantom.com
                                </span>
                            </a>

                            {/* Telegram Card */}
                            <a
                                href={links.telegramUsDirectly}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:border-white/20 hover:from-white/8 transition-all duration-300 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                    <span className="text-white text-base sm:text-lg md:text-xl font-medium">Telegram</span>
                                </div>
                                <span className="text-pink-900 text-sm sm:text-base md:text-lg font-medium group-hover:text-pink-400 transition-colors">
                                    @0xphantom
                                </span>
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
