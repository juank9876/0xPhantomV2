import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BarChart3, Shield, Globe, Repeat, CheckCircle, Search, Flag, FileText, Lock, Box, Cloud, Zap } from "lucide-react";
import FinalCTA from "@/components/FinalCTA";
import { Metadata } from "next";
import MigrationProcess from "./components/MigrationProcess";
import TemplateSelection from "./components/TemplateSelection";
import HostingLaunch from "./components/HostingLaunch";
import TimelineComparison from "./components/TimelineComparison";
import AfterLaunch from "./components/AfterLaunch";

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
    },
};

export default function FeaturesPage() {

    return (
        <div className="min-h-screen bg-black text-white">
            <Header />

            <main>
                <div className="flex flex-col gap-20">
                    {/* Migration Process Section */}
                    <MigrationProcess />

                    {/* Template Selection Section */}
                    <TemplateSelection />

                    {/* Hosting Launch Section */}
                    <HostingLaunch />

                    {/* Timeline and Comparison Section */}
                    <TimelineComparison />

                    {/* After Launch Section */}
                    <AfterLaunch />
                </div>

                <FinalCTA title="Ready to make your first site invisible?" description="Start with one pilot site. See the difference. Then move your portfolio." />
            </main>

            <Footer />
        </div>
    );
}
