import { Button } from "@/components/ui/button";
import Image from "next/image";
import FadeInView from "@/components/FadeInView";
import Link from "next/link";
import { links } from "@/data/links";
import LightRays from "./LightRays";
import { RainbowButton } from "./ui/rainbow-button";

export default function FinalCTA({ title, description }: { title?: string, description?: string }) {
  return (
    <>
      <section className="relative min-h-[500px] overflow-hidden bg-black">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/fondocta.jpg"
            alt="0x-Phantom Background"
            fill
            className="object-contain opacity-50"
            priority
          />
        </div>

        {/* LightRays effect */}
        <LightRays
          raysOrigin="top-center"
          raysColor="#fff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 z-[3]" />

        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/80 to-transparent z-[4]" />

        <div className=" flex flex-col items-center justify-end mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full min-h-[300px] lg:min-h-[500px]">
          {/* Title */}
          <FadeInView delay={0}>
            {title && (
              <h2 className=" text-2xl sm:text-5xl lg:text-5xl font-bold text-white mb-3 leading-tight text-center">
                {title}
              </h2>
            )}
            {!title && (
              <h2 className=" text-2xl sm:text-5xl lg:text-5xl font-bold text-white mb-3 leading-tight text-center">
                Start with one pilot site.<br /> See the invisibility advantage.
              </h2>
            )}
          </FadeInView>

          {/* Subtitle */}
          <FadeInView delay={0.1}>
            {description && (
              <p className="text-base text-white/70 mb-6 max-w-2xl mx-auto text-center">
                {description}
              </p>
            )}
            {!description && (
              <p className="text-base text-white/70 mb-6 max-w-2xl mx-auto text-center">
                Then move the rest of your portfolio before Google makes the move for you.
              </p>
            )}
          </FadeInView>

          {/* Buttons */}
          <FadeInView delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pb-8">
              <RainbowButton
                size="lg"
                className="bg-white text-black hover:bg-white/90 font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/30"
                asChild
              >
                <a href={links.startYourPilotSite} target="_blank" rel="noopener noreferrer">Start Your Pilot Site</a>
              </RainbowButton>
              <RainbowButton
                size="lg"
                variant="outline"
                className="border border-white/30 hover:text-white bg-black/20 text-white hover:bg-black/40 font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30 "
                asChild
              >
                <a href={links.talkToOurTeam} target="_blank" rel="noopener noreferrer">Talk to Our Team</a>
              </RainbowButton>
            </div>
          </FadeInView>
        </div>
      </section>
      <div className="h-32 bg-black hidden lg:block"></div>
    </>
  );
}
