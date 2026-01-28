import Image from "next/image";
import { cn } from "@/lib/utils";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
  aspectRatio?: "square" | "video" | "wide" | "tall";
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
}

export default function ResponsiveImage({
  src,
  alt,
  className,
  priority = false,
  fill = false,
  width,
  height,
  aspectRatio,
  objectFit = "contain",
  ...props
}: ResponsiveImageProps) {
  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[16/9]",
    tall: "aspect-[3/4]",
  };

  const containerClass = cn(
    "relative overflow-hidden",
    aspectRatio && aspectRatioClasses[aspectRatio],
    className
  );

  const imageClass = cn(
    objectFit === "contain" && "object-contain",
    objectFit === "cover" && "object-cover",
    objectFit === "fill" && "object-fill",
    objectFit === "none" && "object-none",
    objectFit === "scale-down" && "object-scale-down",
    "w-full h-full"
  );

  if (fill) {
    return (
      <div className={containerClass}>
        <Image
          src={src}
          alt={alt}
          fill
          className={imageClass}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          {...props}
        />
      </div>
    );
  }

  return (
    <div className={containerClass}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={imageClass}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        {...props}
      />
    </div>
  );
}
