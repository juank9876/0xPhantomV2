"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// Helper to get responsive font size
const getResponsiveFontSize = () => {
  if (typeof window === 'undefined') return 120;
  const width = window.innerWidth;
  if (width < 640) return 48; // mobile small
  if (width < 768) return 60; // mobile
  if (width < 1024) return 80; // tablet
  if (width < 1280) return 100; // desktop
  return 120; // large desktop
};

const getCanvasSize = () => {
  if (typeof window === 'undefined') return 800;
  const width = window.innerWidth;
  if (width < 640) return 400;
  if (width < 768) return 500;
  if (width < 1024) return 600;
  return 800;
};

// Animation speed configuration
const ANIMATION_CONFIG = {
  particleSpeed: 0.5,        // Speed of particle movement (lower = slower)
  fadeSpeed: 0.03,           // Speed of particle fade (lower = slower)
  sweepSpeed: 6,           // Speed of sweep effect (lower = slower)
  intervalDuration: 3000,    // Time between animations in ms
  regenerationDelay: 1000,   // Delay before text regenerates after animation (ms)
  regenerateSpeed: 0.05,
};

export function PlaceholdersAndVanishInput() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const newDataRef = useRef<any[]>([]);
  const [value, setValue] = useState("Invisible");
  const [animating, setAnimating] = useState(false);
  const [showText, setShowText] = useState(true);
  const animationIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [fontSize, setFontSize] = useState(120);
  const [canvasSize, setCanvasSize] = useState(800);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = canvasSize;
    canvas.width = size;
    canvas.height = size;
    ctx.clearRect(0, 0, size, size);

    // Create gradient similar to: from-pink-400 via-purple-500 to-pink-400
    const gradient = ctx.createLinearGradient(0, 0, size / 2, 0);
    gradient.addColorStop(0, "#f472b6");    // pink-400
    gradient.addColorStop(0.5, "#a855f7");  // purple-500
    gradient.addColorStop(1, "#f472b6");    // pink-400

    ctx.font = `bold ${fontSize}px 'Poppins', sans-serif`;
    ctx.fillStyle = gradient;
    ctx.fillText(value, 0, fontSize * 0.8);

    const imageData = ctx.getImageData(0, 0, size, size);
    const pixelData = imageData.data;
    const newData: any[] = [];

    for (let t = 0; t < size; t++) {
      let i = 4 * t * size;
      for (let n = 0; n < size; n++) {
        let e = i + 4 * n;
        if (
          pixelData[e] !== 0 &&
          pixelData[e + 1] !== 0 &&
          pixelData[e + 2] !== 0
        ) {
          newData.push({
            x: n,
            y: t,
            color: [
              pixelData[e],
              pixelData[e + 1],
              pixelData[e + 2],
              pixelData[e + 3],
            ],
          });
        }
      }
    }

    newDataRef.current = newData.map(({ x, y, color }) => ({
      x,
      y,
      r: 1,
      color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`,
    }));
  }, [value, fontSize, canvasSize]);

  useEffect(() => {
    draw();
  }, [value, draw]);

  // Draw initial text when component mounts and handle resize
  useEffect(() => {
    const updateSizes = () => {
      const newFontSize = getResponsiveFontSize();
      const newCanvasSize = getCanvasSize();
      setFontSize(newFontSize);
      setCanvasSize(newCanvasSize);
    };

    updateSizes();
    window.addEventListener('resize', updateSizes);

    return () => window.removeEventListener('resize', updateSizes);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvasSize;
    canvas.height = canvasSize;

    const gradient = ctx.createLinearGradient(0, 0, canvasSize / 2, 0);
    gradient.addColorStop(0, "#f472b6");
    gradient.addColorStop(0.5, "#a855f7");
    gradient.addColorStop(1, "#f472b6");

    ctx.font = `bold ${fontSize}px 'Poppins', sans-serif`;
    ctx.fillStyle = gradient;
    ctx.fillText("Invisible", 0, fontSize * 0.8);
  }, [fontSize, canvasSize]);

  const animate = (start: number) => {
    const animateFrame = (pos: number = 0) => {
      requestAnimationFrame(() => {
        const newArr = [];
        for (let i = 0; i < newDataRef.current.length; i++) {
          const current = newDataRef.current[i];
          if (current.x < pos) {
            newArr.push(current);
          } else {
            if (current.r <= 0) {
              current.r = 0;
              continue;
            }
            current.x += Math.random() > 0.5 ? ANIMATION_CONFIG.particleSpeed : -ANIMATION_CONFIG.particleSpeed;
            current.y += Math.random() > 0.5 ? ANIMATION_CONFIG.particleSpeed : -ANIMATION_CONFIG.particleSpeed;
            current.r -= ANIMATION_CONFIG.fadeSpeed * Math.random();
            newArr.push(current);
          }
        }
        newDataRef.current = newArr;
        const ctx = canvasRef.current?.getContext("2d");
        if (ctx) {
          ctx.clearRect(pos, 0, canvasSize, canvasSize);
          newDataRef.current.forEach((t) => {
            const { x: n, y: i, r: s, color: color } = t;
            if (n > pos) {
              ctx.beginPath();
              ctx.rect(n, i, s, s);
              ctx.fillStyle = color;
              ctx.strokeStyle = color;
              ctx.stroke();
            }
          });
        }
        if (newDataRef.current.length > 0) {
          animateFrame(pos - ANIMATION_CONFIG.sweepSpeed);
        } else {
          // Add delay before regenerating text
          setTimeout(() => {
            regenerate();
          }, ANIMATION_CONFIG.regenerationDelay);
        }
      });
    };
    animateFrame(start);
  };

  const regenerate = () => {
    // Prepare the text for regeneration
    setValue("Invisible");
    draw();

    // Start particles scattered and bring them together
    const scatteredData = newDataRef.current.map((particle) => ({
      ...particle,
      x: particle.x + (Math.random() - 0.5) * 100,
      y: particle.y + (Math.random() - 0.5) * 100,
      r: 0,
      targetX: particle.x,
      targetY: particle.y,
      targetR: 1,
    }));

    newDataRef.current = scatteredData;

    const regenerateFrame = () => {
      requestAnimationFrame(() => {
        const ctx = canvasRef.current?.getContext("2d");
        if (!ctx) return;

        ctx.clearRect(0, 0, canvasSize, canvasSize);

        let allComplete = true;

        newDataRef.current.forEach((particle) => {
          // Move towards target position
          const dx = particle.targetX - particle.x;
          const dy = particle.targetY - particle.y;
          const dr = particle.targetR - particle.r;

          if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5 || Math.abs(dr) > 0.01) {
            allComplete = false;
            particle.x += dx * ANIMATION_CONFIG.regenerateSpeed;
            particle.y += dy * ANIMATION_CONFIG.regenerateSpeed;
            particle.r += dr * ANIMATION_CONFIG.regenerateSpeed;
          } else {
            particle.x = particle.targetX;
            particle.y = particle.targetY;
            particle.r = particle.targetR;
          }

          // Draw particle
          ctx.beginPath();
          ctx.rect(particle.x, particle.y, particle.r, particle.r);
          ctx.fillStyle = particle.color;
          ctx.strokeStyle = particle.color;
          ctx.stroke();
        });

        if (!allComplete) {
          regenerateFrame();
        } else {
          setAnimating(false);
        }
      });
    };

    regenerateFrame();
  };

  const vanishAndSubmit = useCallback(() => {
    setAnimating(true);
    draw();

    if (value) {
      const maxX = newDataRef.current.reduce(
        (prev, current) => (current.x > prev ? current.x : prev),
        0
      );
      animate(maxX);
    }
  }, [value, draw]);

  // Auto-trigger animation
  useEffect(() => {
    animationIntervalRef.current = setInterval(() => {
      if (!animating) {
        vanishAndSubmit();
      }
    }, ANIMATION_CONFIG.intervalDuration);

    return () => {
      if (animationIntervalRef.current) {
        clearInterval(animationIntervalRef.current);
      }
    };
  }, [animating, vanishAndSubmit]);

  const getScale = () => {
    if (typeof window === 'undefined') return 0.5;
    const width = window.innerWidth;
    if (width < 640) return 0.3;
    if (width < 768) return 0.35;
    if (width < 1024) return 0.4;
    if (width < 1280) return 0.45;
    return 0.5;
  };

  return (
    <div className="relative inline-block w-[120px] sm:w-[140px] md:w-[180px] lg:w-[220px] xl:w-[300px]">
      <canvas
        className="absolute top-1 sm:top-1.5 md:top-2 lg:top-2.5 left-0 pointer-events-none origin-top-left"
        ref={canvasRef}
        style={{
          transform: `scale(${getScale()})`,
          filter: 'invert(0)',
        }}
      />
    </div>
  );
}
