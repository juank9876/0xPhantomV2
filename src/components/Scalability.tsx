import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Scalability() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              For every stage: from your first site to a{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                full-scale affiliate network
              </span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Your brand, everywhere players are
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              asChild
            >
              <a href="#contact"> Learn More </a>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative bg-gray-900 rounded-2xl p-4 shadow-2xl border border-gray-700">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <div className="relative h-[250px] sm:h-[350px] lg:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/oxph2.png"
                  alt="0xPhantom Platform"
                  fill
                  className="object-contain p-2"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
