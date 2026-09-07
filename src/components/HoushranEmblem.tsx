import React from 'react';

interface HoushranEmblemProps {
  className?: string;
  height?: number | string;
  alt?: string;
  invert?: boolean;
}

export const HoushranEmblem: React.FC<HoushranEmblemProps> = ({
  className = '',
  height,
  alt = 'لوگوی رسمی هوشران',
  invert = false,
}) => {
  const heightStyle = height !== undefined ? (typeof height === 'number' ? `${height}px` : height) : undefined;
  const shouldInvert = invert || className.includes('text-white') || className.includes('invert');

  return (
    <img
      src="/houshran_logo_transparent.png"
      alt={alt}
      className={`object-contain shrink-0 transition-all duration-200 ${shouldInvert ? 'brightness-0 invert' : ''} ${className}`}
      style={heightStyle ? { height: heightStyle, width: 'auto' } : { width: 'auto' }}
      loading="eager"
    />
  );
};

export default HoushranEmblem;
