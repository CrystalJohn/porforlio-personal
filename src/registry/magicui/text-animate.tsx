"use client";

import { motion, Variants, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimationVariant =
  | "fadeIn"
  | "blurIn"
  | "blurInUp"
  | "blurInDown"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "scaleUp"
  | "scaleDown";

interface TextAnimateProps extends HTMLMotionProps<"div"> {
  children: string;
  className?: string;
  segmentClassName?: string;
  delay?: number;
  duration?: number;
  variants?: Variants;
  as?: React.ElementType;
  by?: "word" | "character" | "line" | "text";
  startOnView?: boolean;
  once?: boolean;
  animation?: AnimationVariant;
}

const defaultVariants: Record<AnimationVariant, Variants> = {
  fadeIn: {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  },
  blurIn: {
    hidden: { opacity: 0, filter: "blur(10px)" },
    show: { opacity: 1, filter: "blur(0px)" },
  },
  blurInUp: {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    show: { opacity: 1, filter: "blur(0px)", y: 0 },
  },
  blurInDown: {
    hidden: { opacity: 0, filter: "blur(10px)", y: -20 },
    show: { opacity: 1, filter: "blur(0px)", y: 0 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  },
  slideDown: {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.5 },
    show: { opacity: 1, scale: 1 },
  },
  scaleDown: {
    hidden: { opacity: 0, scale: 1.5 },
    show: { opacity: 1, scale: 1 },
  },
};

export function TextAnimate({
  children,
  className,
  segmentClassName,
  delay = 0,
  duration = 0.3,
  variants,
  as: Component = "p",
  by = "word",
  startOnView = true,
  once = false,
  animation = "fadeIn",
  ...props
}: TextAnimateProps) {
  const finalVariants = variants || defaultVariants[animation];

  const segments =
    by === "character"
      ? children.split("")
      : by === "word"
      ? children.split(/(\s+)/)
      : by === "line"
      ? children.split("\n")
      : [children];

  // Use motion.div, motion.p, etc based on the 'as' prop dynamically without recreating the component
  const MotionTag = motion[Component as keyof typeof motion] as React.ElementType;

  return (
    <MotionTag
      className={cn("inline-block", className)}
      initial="hidden"
      whileInView={startOnView ? "show" : undefined}
      animate={!startOnView ? "show" : undefined}
      viewport={{ once }}
      transition={{
        staggerChildren: by === "character" ? 0.03 : 0.1,
        delayChildren: delay,
      }}
      {...props}
    >
      {segments.map((segment, i) => (
        <motion.span
          key={`${segment}-${i}`}
          className={cn(
            "inline-block whitespace-pre",
            segmentClassName
          )}
          variants={finalVariants}
          transition={{ duration }}
        >
          {segment}
        </motion.span>
      ))}
    </MotionTag>
  );
}
