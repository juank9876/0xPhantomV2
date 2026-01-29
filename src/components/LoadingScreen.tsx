"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Progress, ProgressTrack, ProgressLabel, ProgressValue } from "@/components/animate-ui/components/base/progress"
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
                        initial={{ opacity: 1, y: 0 }}
                        animate={{ opacity: 1, y: -100 }}
                        src="/logo.png"
                        alt="Logo"
                        layoutId="logo"
                        className="w-96 pointer-events-none"
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
                        <Progress value={progress} className=" w-[1000px] space-y-2">
                            <div className="flex items-center justify-between gap-1">
                                <ProgressLabel className="text-white">
                                    <HyperText key={getLoadingText(progress)}>
                                        {getLoadingText(progress)}
                                    </HyperText>
                                </ProgressLabel>
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
