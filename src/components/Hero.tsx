"use client";

import dynamic from "next/dynamic";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { TextAnimate } from "./ui/text-animate";
import { AnimatedSpan, Terminal, TypingAnimation } from "./ui/terminal";
import { links } from "@/data/links";
import FadeInView from "./FadeInView";
import { RainbowButton } from "./ui/rainbow-button";
import { Safari } from "./ui/safari";
import { HyperText } from "./ui/hyper-text";

const LiquidEther = dynamic(() => import("./LiquidEther"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black" />
});

const DarkVeil = dynamic(() => import("./DarkVeil"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black" />
});

export default function Hero() {

  return (
    <section className="relative flex justify-center items-center h-full lg:min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 w-full h-full z-0">
        <DarkVeil
          resolutionScale={1.5}
          hueShift={313}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={2}
          scanlineFrequency={0}
          warpAmount={1}
        />
      </div>

      <div className="absolute inset-0 w-full h-full z-5 pointer-events-none">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={60}
          cursorSize={150}
          isViscous
          viscous={60}
          iterationsViscous={10}
          iterationsPoisson={10}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center w-full  mx-auto px-4 sm:px-6 md:px-8  pt-30 lg:pt-32 xl:pt-48">
        <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg text-white text-center font-medium drop-shadow-[0_0_15px_rgba(244,114,182,0.5)] hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.8)] transition-all duration-300 animate-fade-in mb-2 sm:mb-3 md:mb-4 max-w-[90%] sm:max-w-full">
          Google Can Fingerprint Your Entire WordPress Portfolio.
        </p>

        <FadeInView delay={0}>
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-tight text-center  mx-auto">
            <span className="bg-[#F6D5EE] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(244,114,182,0.6)] filter brightness-110">
              Phantom Makes Every
            </span>
            <br />
            <div className="relative flex flex-row flex-wrap gap-1 sm:gap-2 md:gap-3 lg:gap-5 mx-auto justify-center px-2 sm:px-4 items-center">
              <span className="bg-linear-to-r from-pink-400 via-purple-500 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.7)] filter brightness-110">
                Site Invisible {" "}
              </span>
            </div>

          </h1>
        </FadeInView>

        <p className="text-[11px] sm:text-xs md:text-sm lg:text-base xl:text-lg text-gray-300 mb-6 sm:mb-8 md:mb-10 max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto leading-relaxed text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] text-shadow-lg px-2 sm:px-4 md:px-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Move 1 site or 500 sites off WordPress to Next.js with unique digital fingerprints per domain, so Google can't detect your CMS and penalize your whole network. Offshore hosting + 30 casino templates + migration in days, not months.
        </p>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-5 justify-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 w-full max-w-[90%] sm:max-w-md md:max-w-2xl mx-auto">
          <FadeInView delay={5} className="w-full sm:w-auto">
            <RainbowButton size="default" className="w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3" asChild>
              <a href={links.startYourPilotSite} target="_blank" rel="noopener noreferrer">Start Your Pilot Site</a>
            </RainbowButton>
          </FadeInView>
          <FadeInView delay={5.5} className="w-full sm:w-auto">
            <RainbowButton size="default" variant="outline" className="w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3" asChild>
              <a href={links.seeHowItWorks} target="_blank" rel="noopener noreferrer">See How It Works</a>
            </RainbowButton>
          </FadeInView>
        </div>

        <FadeInView delay={5.5} className="hidden lg:flex" >
          <Safari url="app.xphantom.io" videoSrc="/hero-video-pc.webm" objectFit="cover" />
        </FadeInView>
      </div>

      <div className="hidden xl:block absolute bottom-0 left-0 overflow-x-hidden z-5 opacity-90 hover:opacity-100 transition-opacity duration-500 group">
        <Terminal startOnView sequence className="bg-black/40 backdrop-blur-sm border-white/10">
          <TypingAnimation delay={7000} startOnView={false} className="text-sm font-mono transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">&gt; init 0xPhantom CMS</TypingAnimation>
          <span className="text-sm font-mono text-green-500 opacity-0 animate-fade-in transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" style={{ animationDelay: '6s' }}>
            ✔ Creating server instance.
          </span>
          <span className="text-sm font-mono text-green-500 opacity-0 animate-fade-in transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" style={{ animationDelay: '6.5s' }}>
            ✔ Allocating resources.
          </span>
          <span className="text-sm font-mono text-green-500 opacity-0 animate-fade-in transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" style={{ animationDelay: '7s' }}>
            ✔ Server successfully created.
          </span>
          <span className="text-sm font-mono text-green-500 opacity-0 animate-fade-in transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" style={{ animationDelay: '7.5s' }}>
            ✔ Validated DNS records.
          </span>

          <span className="text-green-500 text-sm opacity-0 animate-fade-in transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" style={{ animationDelay: '8s' }}>
            ✔ Configuring environment variables.
          </span>
          <span className="text-green-500 text-sm opacity-0 animate-fade-in transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" style={{ animationDelay: '8.5s' }}>
            ✔ Connecting to database.
          </span>

          <span className="text-green-500 text-sm opacity-0 animate-fade-in transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" style={{ animationDelay: '9s' }}>
            ✔ Running CMS services.
          </span>
          <span className="text-green-500 text-sm opacity-0 animate-fade-in transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" style={{ animationDelay: '9.5s' }}>
            ✔ Content engine loaded.
          </span>

          <span className="text-green-500 text-sm opacity-0 animate-fade-in transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" style={{ animationDelay: '10s' }}>
            ✔ Compiling templates.
          </span>

          <span className="text-blue-500 text-sm opacity-0 animate-fade-in transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" style={{ animationDelay: '10.5s' }}>
            ℹ Active template: phantom-pro
          </span>

          <span className="text-muted-foreground text-sm opacity-0 animate-fade-in transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(156,163,175,0.8)]" style={{ animationDelay: '11s' }}>
            CMS is live and ready.
          </span>
          <span className="text-muted-foreground text-sm opacity-0 animate-fade-in transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(156,163,175,0.8)]" style={{ animationDelay: '11.5s' }}>
            Start creating and publishing content.
          </span>
        </Terminal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[80px] sm:h-[100px] md:h-[120px] w-full bg-linear-to-b from-transparent via-black/40 to-black z-20 pointer-events-none">

      </div>
    </section>
  );
}
