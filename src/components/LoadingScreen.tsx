"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true)
    const [progress, setProgress] = useState(0)

    const getLoadingText = (progress: number): string => {
        if (progress <= 33) return "STARTING 0xPhantom..."
        if (progress <= 66) return "LOADING RESOURCES..."
        return "FINALIZING SETUP..."
    }

    useEffect(() => {
        // Animar el progreso de 0 a 100 más rápido
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval)
                    return 100
                }
                return prev + 20
            })
        }, 300) // 500ms total (10% cada 50ms = 10 pasos)

        return () => {
            clearInterval(progressInterval)
        }
    }, [])

    // Esperar a que el progreso llegue al 100% antes de ocultar
    useEffect(() => {
        if (progress >= 100) {
            const hideTimer = setTimeout(() => {
                setIsLoading(false)
            }, 300) // Pausa reducida después de completar

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
                    transition={{ duration: 0.3, delay: 0.2 }}
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
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    />

                    <div className="w-full max-w-[280px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] space-y-2 sm:space-y-3">
                        <div className="flex items-center justify-between gap-2 sm:gap-3">
                            <motion.span
                                key={getLoadingText(progress)}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.2 }}
                                className="text-white text-xs sm:text-sm md:text-base font-medium tracking-wide flex-1 min-w-0"
                            >
                                {getLoadingText(progress)}
                            </motion.span>
                            <motion.span
                                className="text-xs sm:text-sm md:text-base text-white font-mono whitespace-nowrap tabular-nums"
                                key={progress}
                                initial={{ scale: 1.2, opacity: 0.5 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.15 }}
                            >
                                {progress}%
                            </motion.span>
                        </div>
                        <div className="h-1 sm:h-1.5 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                            <motion.div
                                className="h-full bg-linear-to-r from-purple-500 via-pink-500 to-purple-500 bg-size-[200%_100%] animate-gradient"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
