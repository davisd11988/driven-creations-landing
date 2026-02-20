import Image from 'next/image';

interface LogoProps {
  className?: string;
  /** Height of the logo in pixels */
  height?: number;
}

export default function Logo({
  className = '',
  height = 32,
}: LogoProps) {
  // SVG aspect ratio is 588:159.4 ≈ 3.69:1
  const width = Math.round(height * 3.69);

  return (
    <Image
      src="/images/dc-logo-full-white.svg"
      alt="Driven Creations"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
