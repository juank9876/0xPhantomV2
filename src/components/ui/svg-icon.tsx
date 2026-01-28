

interface SvgIconProps {
    src: string;
    className?: string;
    alt?: string;
}

export function SvgIcon({ src, className = "", alt = "" }: SvgIconProps) {
    return (
        <div className={`${className}`}>
            <img
                src={src}
                alt={alt}
                className="w-full h-full"
            />
        </div>
    );
}

