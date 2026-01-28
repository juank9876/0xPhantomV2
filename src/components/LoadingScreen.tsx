"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Progress, ProgressTrack, ProgressLabel, ProgressValue } from "@/components/animate-ui/components/base/progress"

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true)
    const [progress, setProgress] = useState(0)

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
        }, 30) // 3000ms total (1% cada 30ms = 100 pasos)

        return () => {
            clearInterval(progressInterval)
        }
    }, [])

    // Esperar a que el progreso llegue al 100% antes de ocultar
    useEffect(() => {
        if (progress >= 100) {
            const hideTimer = setTimeout(() => {
                setIsLoading(false)
            }, 800) // Pausa después de completar

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
                    className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center gap-8 pointer-events-none"
                    onAnimationComplete={() => {
                        if (!isLoading) {
                            const element = document.querySelector('[data-loading-screen]')
                            if (element) element.remove()
                        }
                    }}
                    data-loading-screen
                >
                    <motion.img
                        src="/logo.png"
                        alt="Logo"
                        layoutId="logo"
                        className="w-60 pointer-events-none"
                        transition={{
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <Progress value={progress} className="w-64 sm:w-80 space-y-2">
                            <div className="flex items-center justify-between gap-1">
                                <ProgressLabel className="text-white">Loading 0xPhantom</ProgressLabel>
                                <span className="text-sm text-white">
                                    <ProgressValue /> %
                                </span>
                            </div>
                            <ProgressTrack className="h-1 bg-white/10 [&>div]:bg-white" />
                        </Progress>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
