'use client';
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useSpring, useTransform, useMotionValue, SpringOptions } from 'framer-motion';
import { cn } from './utils';

type SpotlightProps = {
  className?: string;
  size?: number;
  springOptions?: SpringOptions;
  color?: string;
};

export function Spotlight({
  className,
  size = 200,
  springOptions = { stiffness: 800, damping: 40, bounce: 0 },
  color = 'rgba(128, 40, 228, 1)',
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [parentElement, setParentElement] = useState<HTMLElement | null>(null);

  const mouseX = useMotionValue(-size);
  const mouseY = useMotionValue(-size);

  const springX = useSpring(mouseX, springOptions);
  const springY = useSpring(mouseY, springOptions);

  const spotlightLeft = useTransform(springX, (x) => `${x - size / 2}px`);
  const spotlightTop = useTransform(springY, (y) => `${y - size / 2}px`);

  useEffect(() => {
    if (containerRef.current) {
      const parent = containerRef.current.parentElement;
      if (parent && parent instanceof HTMLElement) {
        parent.style.position = 'relative';
        parent.style.overflow = 'hidden';
        setParentElement(parent);
      }
    }
  }, []);

  useEffect(() => {
    if (!parentElement) return;

    let rect = parentElement.getBoundingClientRect();

    const updateRect = () => {
      if (parentElement) {
        rect = parentElement.getBoundingClientRect();
      }
    };

    const handleMouseEnter = () => {
      updateRect();
      setIsHovered(true);
    };

    const handleMouseMove = (event: globalThis.MouseEvent) => {
      mouseX.set(event.clientX - rect.left);
      mouseY.set(event.clientY - rect.top);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    parentElement.addEventListener('mouseenter', handleMouseEnter);
    parentElement.addEventListener('mousemove', handleMouseMove);
    parentElement.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', updateRect, { passive: true });
    window.addEventListener('resize', updateRect, { passive: true });

    return () => {
      parentElement.removeEventListener('mouseenter', handleMouseEnter);
      parentElement.removeEventListener('mousemove', handleMouseMove);
      parentElement.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', updateRect);
      window.removeEventListener('resize', updateRect);
    };
  }, [parentElement, mouseX, mouseY]);

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        'pointer-events-none absolute rounded-full blur-xl transition-opacity duration-200',
        isHovered ? 'opacity-100' : 'opacity-0',
        className
      )}
      style={{
        width: size,
        height: size,
        left: spotlightLeft,
        top: spotlightTop,
        background: `radial-gradient(circle, ${color} 100%, transparent 100%)`,
      }}
    />
  );
}
