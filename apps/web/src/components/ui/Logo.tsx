import React from "react";
import Image from "next/image";
import Link from "next/link";

export type LogoVariant = "primary" | "dark" | "light" | "monogram";

interface LogoProps {
  /**
   * - primary: Horizontal wordmark lockup with transparent background for dark UI
   * - dark: High-end dark obsidian card container with monogram and typography
   * - light: High-contrast light card container for white backgrounds & PDF exports
   * - monogram: Standalone geometric YL glyph icon mark
   */
  variant?: LogoVariant;
  className?: string;
  href?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  alt?: string;
}

const LOGO_CONFIG: Record<
  LogoVariant,
  { src: string; defaultWidth: number; defaultHeight: number; alt: string }
> = {
  primary: {
    src: "/brand/yl-logo-primary.svg",
    defaultWidth: 175,
    defaultHeight: 40,
    alt: "Yuvitra Labs — Industrial Software & Digital Engineering",
  },
  dark: {
    src: "/brand/yl-logo-dark.svg",
    defaultWidth: 198,
    defaultHeight: 45,
    alt: "Yuvitra Labs Dark Logo",
  },
  light: {
    src: "/brand/yl-logo-light.svg",
    defaultWidth: 198,
    defaultHeight: 45,
    alt: "Yuvitra Labs Light Logo",
  },
  monogram: {
    src: "/brand/yl-monogram.svg",
    defaultWidth: 36,
    defaultHeight: 36,
    alt: "Yuvitra Labs YL Monogram",
  },
};

export function Logo({
  variant = "primary",
  className = "",
  href = "/",
  width,
  height,
  priority = false,
  alt,
}: LogoProps) {
  const config = LOGO_CONFIG[variant];
  const finalWidth = width ?? config.defaultWidth;
  const finalHeight = height ?? config.defaultHeight;
  const finalAlt = alt ?? config.alt;

  const imageElement = (
    <Image
      src={config.src}
      width={finalWidth}
      height={finalHeight}
      alt={finalAlt}
      priority={priority}
      className={`inline-block select-none ${className}`}
    />
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex items-center transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-amber-500/40 rounded-sm"
        aria-label="Yuvitra Labs Home"
      >
        {imageElement}
      </Link>
    );
  }

  return imageElement;
}
