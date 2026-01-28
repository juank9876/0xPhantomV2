'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function CMSShowcase() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            label: 'Affiliate reach without limits',
            title: 'Your brand, everywhere players are',
            image: '/cms-component/image.png',
            background: '/cms-component/background.jpg'
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="w-full bg-black py-12 md:py-20 px-4 md:px-6 lg:px-12 xl:px-20">
            {/* Header */}
            <div className="max-w-[1400px] mx-auto mb-8 md:mb-12 flex flex-col md:flex-row items-start md:items-start justify-between gap-6">
                <h2 className="font-bold text-white leading-tight max-w-4xl">
                    For every stage: from your first site
                    <br />
                    to a full-scale affiliate network
                </h2>
                <button className="hidden md:block px-6 md:px-8 py-2.5 md:py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors text-sm md:text-base whitespace-nowrap">
                    Start for free
                </button>
            </div>

            {/* Carousel Container */}
            <div className="max-w-[1400px] mx-auto relative">
                {/* Main Card */}
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-gray-800 md:border-2 bg-black min-h-[500px] md:min-h-[700px] lg:min-h-[800px]">
                    {/* Background Image */}
                    <div className="absolute inset-0 ">
                        <img
                            src={slides[currentSlide].background}
                            alt="Background"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:px-16 pb-0">
                        {/* Top Text */}
                        <div className="mb-6 md:mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-0">
                            <div className="flex flex-col">
                                <p className="text-gray-400 text-xs sm:text-sm mb-2 md:mb-3">{slides[currentSlide].label}</p>
                                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-2 md:mb-4 max-w-md">
                                    {slides[currentSlide].title}
                                </h3>
                            </div>

                            <button className="text-white/60 hover:text-white flex items-center gap-2 hover:gap-3 transition-all group text-sm md:text-base">
                                <span>Learn more</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </div>

                        {/* Screenshot/Image */}
                        <div className="mt-6 md:mt-12 rounded-xl md:rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
                            <img
                                src={slides[currentSlide].image}
                                alt={slides[currentSlide].title}
                                className="w-full h-auto"
                            />
                        </div>
                        {/* Navigation Arrows */}
                    </div>
                </div>
                <div className="relative justify-end flex gap-2 z-20 pt-4 md:pt-10">
                    <button
                        onClick={prevSlide}
                        className="flex w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 border items-center justify-center text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="flex w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 border items-center justify-center text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                </div>

            </div>

            {/* Mobile Button */}
            <div className="md:hidden flex justify-center mt-6">
                <button className="px-6 py-2.5 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors text-sm w-full max-w-xs">
                    Start for free
                </button>
            </div>
        </section>
    );
}
