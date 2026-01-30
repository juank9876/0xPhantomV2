"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { HyperText } from "./ui/hyper-text"

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true)
    const [progress, setProgress] = useState(0)

    const getLoadingText = (progress: number): string => {
        if (progress <= 33) return "STARTING 0xPhantom..."
        if (progress <= 66) return "LOADING RESOURCES..."
        return "FINALIZING SETUP..."
    }

    useEffect(() => {
        // Animar el progreso de 0 a 100
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval)
                    return 100
                }
                return prev + 5
            })
        }, 150) // 3000ms total (1% cada 30ms = 100 pasos)

        return () => {
            clearInterval(progressInterval)
        }
    }, [])

    // Esperar a que el progreso llegue al 100% antes de ocultar
    useEffect(() => {
        if (progress >= 100) {
            const hideTimer = setTimeout(() => {
                setIsLoading(false)
            }, 1000) // Pausa después de completar

            return () => {
                clearTimeout(hideTimer)
            }
        }
    }, [progress])
    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 px-4 pointer-events-none"
                    onAnimationComplete={() => {
                        if (!isLoading) {
                            const element = document.querySelector('[data-loading-screen]')
                            if (element) element.remove()
                        }
                    }}
                    data-loading-screen
                >
                    <motion.img
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        src="/logo.png"
                        alt="Logo"
                        className="w-48 sm:w-64 md:w-80 lg:w-96 max-w-[90vw] pointer-events-none"
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    />

                    <div className="w-full max-w-[280px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] space-y-2 sm:space-y-3">
                        <div className="flex items-center justify-between gap-2 sm:gap-3">
                            <HyperText
                                key={getLoadingText(progress)}
                                className="text-white text-xs sm:text-sm md:text-base font-medium py-0 flex-1 min-w-0"
                                duration={400}
                                startOnView={false}
                                delay={0}
                            >
                                {getLoadingText(progress)}
                            </HyperText>
                            <span className="text-xs sm:text-sm md:text-base text-white whitespace-nowrap">
                                {progress}%
                            </span>
                        </div>
                        <div className="h-1 sm:h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-white transition-all duration-300 ease-out"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
