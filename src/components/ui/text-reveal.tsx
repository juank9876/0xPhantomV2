"use client"

import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react"
import { motion, MotionValue, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string
  fontSize?: string
  lineHeight?: string
}

export const TextReveal: FC<TextRevealProps> = ({
  children,
  className,
  fontSize = "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-8xl",
  lineHeight = "leading-relaxed"
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.5", "end 0.8"]
  })

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string")
  }

  const words = children.split(" ")

  return (
    <div ref={targetRef} className={cn("relative z-0  py-20", className)}>
      <div
        className={
          "mx-auto flex max-w-7xl items-center justify-center bg-transparent px-4 sm:px-6 md:px-8"
        }
      >
        <p
          className={cn(
            "flex flex-wrap justify-center font-medium text-white/20",
            fontSize,
            lineHeight
          )}
        >
          {words.map((word, i) => {
            const start = i / words.length
            const end = start + 1 / words.length
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            )
          })}
        </p>
      </div>
    </div>
  )
}

interface WordProps {
  children: ReactNode
  progress: MotionValue<number>
  range: [number, number]
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span className="relative mx-1 sm:mx-1.5 lg:mx-2">
      <span className="absolute opacity-20">{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-white"}
      >
        {children}
      </motion.span>
    </span>
  )
}
