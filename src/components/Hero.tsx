"use client";

import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { TextAnimate } from "./ui/text-animate";
import { AnimatedSpan, Terminal, TypingAnimation } from "./ui/terminal";
import { links } from "@/data/links";
import LiquidEther from "./LiquidEther";
import DarkVeil from "./DarkVeil";
import FadeInView from "./FadeInView";
import { RainbowButton } from "./ui/rainbow-button";
import { Safari } from "./ui/safari";
import { HyperText } from "./ui/hyper-text";

export default function Hero() {

  return (
    <section className="relative h-full min-h-screen overflow-hidden bg-black">
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
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={1}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center w-full mx-auto py-16 sm:py-20 md:pt-48">
        <TextAnimate animation="blurIn" by="character" once delay={3.5} duration={1} className="text-xs mb-1 sm:text-sm md:text-lg lg:text-xl text-white text-center font-medium drop-shadow-[0_0_15px_rgba(244,114,182,0.5)] hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.8)] transition-all duration-300">
          Google Can Fingerprint Your Entire WordPress Portfolio.
        </TextAnimate>

        <FadeInView delay={0}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight text-center px-2">
            <span className="bg-[#F6D5EE] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(244,114,182,0.6)] filter brightness-110">
              Phantom Makes Every
            </span>
            <br />
            <div className="relative flex flex-row gap-2 sm:gap-3 md:gap-5 mx-auto justify-center px-2 sm:px-4">
              <span className="bg-linear-to-r from-pink-400 via-purple-500 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.7)] filter brightness-110">
                Site {" "}
              </span>
              <PlaceholdersAndVanishInput />
            </div>
            <span className="sr-only">Invisible</span>
          </h1>
        </FadeInView>



        <TextAnimate delay={1} duration={2} className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] text-shadow-lg px-4 sm:px-8" animation="blurInUp" by="word" once>
          Move 1 site or 500 sites off WordPress to Next.js with unique digital fingerprints per domain, so Google can't detect your CMS and penalize your whole network. Offshore hosting + 30 casino templates + migration in days, not months.
        </TextAnimate>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center mb-8 sm:mb-10 md:mb-25 w-full sm:w-auto px-4 sm:px-0">
          <FadeInView delay={5}>
            <RainbowButton size="lg" asChild>
              <a href={links.startYourPilotSite} target="_blank" rel="noopener noreferrer">Start Your Pilot Site</a>
            </RainbowButton>
          </FadeInView>
          <FadeInView delay={5.5}>
            <RainbowButton size="lg" variant="outline" asChild>
              <a href={links.seeHowItWorks} target="_blank" rel="noopener noreferrer">See How It Works</a>
            </RainbowButton>
          </FadeInView>
        </div>

        <FadeInView delay={5.5}>

          <Safari url="app.xphantom.io" videoSrc="/hero-video-pc.webm" objectFit="cover" />

        </FadeInView>
      </div>

      <div className="hidden xl:block absolute bottom-0 left-0  overflow-x-hidden z-5 opacity-90 hover:opacity-50 transition-opacity duration-500">
        <Terminal startOnView sequence className="bg-black/40 backdrop-blur-sm border-white/10">
          <TypingAnimation className="text-sm font-mono">&gt; init 0xPhantom CMS</TypingAnimation>
          <AnimatedSpan delay={2000} >
            <HyperText defaultStyles={false} delay={2000} startOnView className="text-sm font-mono text-green-500">
              ✔ Creating server instance.
            </HyperText>
          </AnimatedSpan>
          <HyperText defaultStyles={false} delay={2500} startOnView className="text-sm font-mono text-green-500">
            ✔ Allocating resources.
          </HyperText>
          <HyperText defaultStyles={false} delay={3000} startOnView className="text-sm font-mono text-green-500">
            ✔ Server successfully created.
          </HyperText>
          <HyperText defaultStyles={false} delay={3500} startOnView className="text-sm font-mono text-green-500">
            ✔ Validated DNS records.
          </HyperText>

          <HyperText defaultStyles={false} delay={4000} startOnView className="text-green-500 text-sm">
            ✔ Configuring environment variables.
          </HyperText>
          <HyperText defaultStyles={false} delay={4500} startOnView className="text-green-500 text-sm">
            ✔ Connecting to database.
          </HyperText>

          <HyperText defaultStyles={false} delay={5000} startOnView className="text-green-500 text-sm">
            ✔ Running CMS services.
          </HyperText>
          <HyperText defaultStyles={false} delay={5500} startOnView className="text-green-500 text-sm">
            ✔ Content engine loaded.
          </HyperText>

          <HyperText defaultStyles={false} delay={6000} startOnView className="text-green-500 text-sm">
            ✔ Compiling templates.
          </HyperText>

          <HyperText defaultStyles={false} delay={6500} startOnView className="text-blue-500 text-sm">
            ℹ Active template: phantom-pro
          </HyperText>

          <HyperText defaultStyles={false} delay={7000} startOnView className="text-muted-foreground text-sm">
            CMS is live and ready.
          </HyperText>
          <HyperText defaultStyles={false} delay={7500} startOnView className="text-muted-foreground text-sm">
            Start creating and publishing content.
          </HyperText>
        </Terminal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[80px] sm:h-[100px] md:h-[120px] w-full bg-linear-to-b from-transparent via-black/40 to-black z-20 pointer-events-none">

      </div>
    </section>
  );
}
