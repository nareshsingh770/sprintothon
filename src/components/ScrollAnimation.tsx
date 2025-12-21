"use client";

import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "fade";
  distance?: number;
}

export default function ScrollAnimation({
  children,
  className = "",
  direction = "up",
  distance = 32,
}: ScrollAnimationProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const getTransformStyle = () => {
    if (inView || direction === "fade") {
      return {};
    }

    const directionTransforms = {
      up: { transform: `translateY(${distance}px)` },
      down: { transform: `translateY(-${distance}px)` },
      left: { transform: `translateX(${distance}px)` },
      right: { transform: `translateX(-${distance}px)` },
    };

    return directionTransforms[direction];
  };

  const getOpacityClass = () => {
    return inView ? "opacity-100" : "opacity-0";
  };

  return (
    <div
      ref={ref}
      style={getTransformStyle()}
      className={`transition-all duration-700 ${getOpacityClass()} ${className}`}
    >
      {children}
    </div>
  );
}
