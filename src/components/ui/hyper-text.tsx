"use client"

import { useEffect, useRef, useState, useMemo, useCallback } from "react"
import { motion, MotionProps } from "motion/react"

import { cn } from "@/lib/utils"

type CharacterSet = string[] | readonly string[]

interface HyperTextProps extends MotionProps {
  /** The text content to be animated */
  children: string
  /** Optional className for styling */
  className?: string
  /** Duration of the animation in milliseconds */
  duration?: number
  /** Delay before animation starts in milliseconds */
  delay?: number
  /** Component to render as - defaults to div */
  as?: React.ElementType
  /** Whether to start animation when element comes into view */
  startOnView?: boolean
  /** Whether to trigger animation on hover */
  animateOnHover?: boolean
  /** Custom character set for scramble effect. Defaults to uppercase alphabet */
  characterSet?: CharacterSet
  /** Whether to use default styles */
  defaultStyles?: boolean
}

const DEFAULT_CHARACTER_SET = Object.freeze(
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
) as readonly string[]

const getRandomInt = (max: number): number => Math.floor(Math.random() * max)

export function HyperText({
  defaultStyles = true,
  children,
  className,
  duration = 800,
  delay = 0,
  as: Component = "div",
  startOnView = true,
  animateOnHover = false,
  characterSet = DEFAULT_CHARACTER_SET,
  ...props
}: HyperTextProps) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  })

  const [displayText, setDisplayText] = useState<string[]>(() =>
    children.split("")
  )
  const [isAnimating, setIsAnimating] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const iterationCount = useRef(0)
  const elementRef = useRef<HTMLElement>(null)

  const handleAnimationTrigger = useCallback(() => {
    if (animateOnHover && !isAnimating) {
      iterationCount.current = 0
      setIsAnimating(true)
    }
  }, [animateOnHover, isAnimating])

  // Handle animation start based on view or delay
  useEffect(() => {
    if (!startOnView) {
      const startTimeout = setTimeout(() => {
        setIsAnimating(true)
      }, delay)
      return () => clearTimeout(startTimeout)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsAnimating(true)
          }, delay)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "-30% 0px -30% 0px" }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay, startOnView])

  // Handle scramble animation with optimized updates
  useEffect(() => {
    if (!isAnimating) return

    const maxIterations = children.length
    const startTime = performance.now()
    let animationFrameId: number
    let lastUpdateTime = startTime
    const updateInterval = 30 // Update every 50ms instead of every frame

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Throttle updates to reduce re-renders
      if (currentTime - lastUpdateTime >= updateInterval || progress >= 1) {
        lastUpdateTime = currentTime
        iterationCount.current = progress * maxIterations

        setDisplayText((currentText) =>
          currentText.map((letter, index) =>
            letter === " "
              ? letter
              : index <= iterationCount.current
                ? children[index]
                : characterSet[getRandomInt(characterSet.length)]
          )
        )
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      } else {
        setIsAnimating(false)
        setHasAnimated(true)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrameId)
  }, [children, duration, isAnimating, characterSet])

  // Memoize rendered text to avoid unnecessary re-renders
  const renderedText = useMemo(() => {
    return displayText.map((letter, index) => (
      <span
        key={index}
        className={cn("font-mono", letter === " " ? "w-3" : "")}
      >
        {defaultStyles ? letter.toUpperCase() : letter}
      </span>
    ))
  }, [displayText, defaultStyles])

  if (defaultStyles) return (
    <MotionComponent
      ref={elementRef}
      className={cn("overflow-hidden py-2 text-lg lg:text-4xl py-0 font-bold", className)}
      onMouseEnter={handleAnimationTrigger}
      style={{ opacity: isAnimating || hasAnimated ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}
      {...props}
    >
      {renderedText}
    </MotionComponent>
  )
  else return (
    <MotionComponent
      ref={elementRef}
      className={cn("overflow-hidden py-px text-lg lg:text-4xl pb-0 font-semibold", className)}
      onMouseEnter={handleAnimationTrigger}
      style={{ opacity: isAnimating || hasAnimated ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}
      {...props}
    >
      {renderedText}
    </MotionComponent>
  )
}
