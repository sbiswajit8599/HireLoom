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
  springOptions = { bounce: 0 },
  color = 'rgba(128, 40, 228, 1)',
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [parentElement, setParentElement] = useState<HTMLElement | null>(null);

  const mouseXRef = useMotionValue(0);
  const mouseYRef = useMotionValue(0);

  const spotlightLeft = useTransform(mouseXRef, (x) => `${x - size / 2}px`);
  const spotlightTop = useTransform(mouseYRef, (y) => `${y - size / 2}px`);

  useEffect(() => {
    if (containerRef.current) {
      const parent = containerRef.current.parentElement;
      if (parent) {
        parent.style.position = 'relative';
        parent.style.overflow = 'hidden';
        setParentElement(parent);
      }
    }
  }, []);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!parentElement) return;
      const { left, top } = parentElement.getBoundingClientRect();
      mouseXRef.set(event.clientX - left);
      mouseYRef.set(event.clientY - top);
    },
    [mouseXRef, mouseYRef, parentElement]
  );

  useEffect(() => {
    if (!parentElement) return;

    parentElement.addEventListener('mousemove', handleMouseMove);
    parentElement.addEventListener('mouseenter', () => setIsHovered(true));
    parentElement.addEventListener('mouseleave', () => setIsHovered(false));

    return () => {
      parentElement.removeEventListener('mousemove', handleMouseMove);
      parentElement.removeEventListener('mouseenter', () => setIsHovered(true));
      parentElement.removeEventListener('mouseleave', () =>
        setIsHovered(false)
      );
    };
  }, [parentElement, handleMouseMove]);

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
