import React, { useEffect, useRef } from 'react';

interface CerebriumDotsCanvasProps {
  className?: string;
}

export const CerebriumDotsCanvas: React.FC<CerebriumDotsCanvasProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initGrid();
    };
    window.addEventListener('resize', handleResize);

    // Grid points setup
    const spacing = 38; // Clean, elegant spacing like Cerebrium
    interface Dot {
      x: number;
      y: number;
      originX: number;
      originY: number;
      vx: number;
      vy: number;
      baseAlpha: number;
    }

    let dots: Dot[] = [];

    const initGrid = () => {
      dots = [];
      const cols = Math.ceil(width / spacing) + 2;
      const rows = Math.ceil(height / spacing) + 2;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * spacing;
          const y = r * spacing;
          // Random slight base opacity between 0.08 and 0.18
          const baseAlpha = 0.08 + Math.random() * 0.12;
          dots.push({
            x,
            y,
            originX: x,
            originY: y,
            vx: 0,
            vy: 0,
            baseAlpha,
          });
        }
      }
    };

    initGrid();

    let time = 0;

    const render = () => {
      time += 0.015;

      // Smooth mouse movement
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // Render dots
      const maxDistance = 140; // Mouse interaction radius

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        // Distance from mouse
        const dx = mouseX - dot.x;
        const dy = mouseY - dot.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Repulsion / ripple effect near mouse
        if (dist < maxDistance) {
          const force = (1 - dist / maxDistance) * 12;
          const angle = Math.atan2(dy, dx);
          dot.vx -= Math.cos(angle) * force * 0.25;
          dot.vy -= Math.sin(angle) * force * 0.25;
        }

        // Spring back to original position
        dot.vx += (dot.originX - dot.x) * 0.05;
        dot.vy += (dot.originY - dot.y) * 0.05;
        dot.vx *= 0.85;
        dot.vy *= 0.85;

        dot.x += dot.vx;
        dot.y += dot.vy;

        // Subtle gentle breathing wave across the canvas
        const wave = Math.sin(time + dot.originX * 0.01 + dot.originY * 0.01) * 0.04;
        let alpha = dot.baseAlpha + wave;

        // Highlight near mouse
        if (dist < maxDistance) {
          const highlight = (1 - dist / maxDistance) * 0.45;
          alpha += highlight;
        }

        ctx.beginPath();
        // Dot radius: 1.2px normally, slightly larger near mouse
        const radius = dist < maxDistance ? 1.5 + (1 - dist / maxDistance) * 0.8 : 1.2;
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);

        // Color: subtle slate-cyan in Cerebrium palette
        if (dist < maxDistance) {
          ctx.fillStyle = `rgba(0, 240, 255, ${Math.min(alpha, 0.75)})`;
        } else {
          ctx.fillStyle = `rgba(148, 163, 184, ${Math.max(alpha, 0.05)})`;
        }
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{
        width: '100vw',
        height: '100vh',
      }}
      aria-hidden="true"
    />
  );
};
