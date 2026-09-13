import React, { useEffect, useRef, useState } from 'react';

interface CounterStatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
  sublabel?: string;
  duration?: number;
}

export const CounterStat: React.FC<CounterStatProps> = ({
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
  label,
  sublabel,
  duration = 2000,
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            const startTime = performance.now();

            const updateNumber = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Ease out quad
              const easeOut = 1 - Math.pow(1 - progress, 3);
              const current = easeOut * value;

              setDisplayValue(current);

              if (progress < 1) {
                requestAnimationFrame(updateNumber);
              } else {
                setDisplayValue(value);
              }
            };

            requestAnimationFrame(updateNumber);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated, value, duration]);

  // Convert English numbers to Persian digits
  const toPersianDigits = (numStr: string) => {
    const id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return numStr.replace(/[0-9]/g, (w) => id[+w]);
  };

  const formattedValue = toPersianDigits(
    decimals > 0 ? displayValue.toFixed(decimals) : Math.round(displayValue).toString()
  );

  return (
    <div ref={elementRef} className="hr-stat-glass-card group">
      <div className="hr-stat-glow-blob" />
      <div className="relative z-10">
        <div className="hr-stat-number-wrap">
          <span className="hr-stat-number">{formattedValue}</span>
          {suffix && <span className="hr-stat-affix">{suffix}</span>}
          {prefix && <span className="hr-stat-affix">{prefix}</span>}
        </div>
        <h3 className="hr-stat-title">{label}</h3>
        {sublabel && <p className="hr-stat-desc">{sublabel}</p>}
      </div>
    </div>
  );
};
