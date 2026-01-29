import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandSlider from "@/components/BrandSlider";
import WordPressRisk from "@/components/WordPressRisk";
import PhantomSolution from "@/components/PhantomSolution";
import { HowPhantomWorks2 } from "@/components/HowPhantomWorks";
import LiveSites from "@/components/LiveSites";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground dark overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <BrandSlider />

        <WordPressRisk />
        <PhantomSolution />

        <HowPhantomWorks2 />
        <LiveSites />
        <FAQ />

        {/*
        <CMSShowcase />
        <VideoHero />
        <AffiliateShowcase />
        
        <Scalability />
        <Growth />
        <Showcase />
        <Plans />
        <Resources />
        <AIAssistance />
        <ForBusiness />
        {/*
        */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
