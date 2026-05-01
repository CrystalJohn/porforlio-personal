"use client";

import React, { useRef } from "react";
import { FadeIn } from "@/components/marketing/FadeIn";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { cn } from "@/lib/utils";

import {
  IconFigma,
  IconReact,
  IconNodeJs,
  IconJavaScript,
  IconHtml5,
  IconNextJs,
  IconMongoDB,
  IconExpress,
  IconRedux,
  IconTypescript,
  IconTailwindCSS,
  IconVercel,
  IconGatsby,
  IconGithub,
  IconLinkedin,
} from "@/components/ui/brand-icons";

const Circle = React.forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border border-white/10 bg-[#111] p-3 shadow-[0_0_20px_-12px_rgba(255,255,255,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});
Circle.displayName = "Circle";

export function MarketingSkills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  // Rows 1 and 2
  const r1n1 = useRef<HTMLDivElement>(null);
  const r1n2 = useRef<HTMLDivElement>(null);
  const r1n3 = useRef<HTMLDivElement>(null);
  const r1n4 = useRef<HTMLDivElement>(null);
  const r1n5 = useRef<HTMLDivElement>(null);
  const r1n6 = useRef<HTMLDivElement>(null);

  const r2n1 = useRef<HTMLDivElement>(null);
  const r2n2 = useRef<HTMLDivElement>(null);
  const r2n3 = useRef<HTMLDivElement>(null);
  const r2n4 = useRef<HTMLDivElement>(null);
  const r2n5 = useRef<HTMLDivElement>(null);

  return (
    <div className="relative z-10 w-full max-w-275 mx-auto px-8 py-32 flex flex-col items-center">
      <FadeIn delay={0}>
        <div className="text-center mb-16">
          <h2
            style={{
              fontFamily: "var(--font-syne, sans-serif)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "var(--mk-text)",
              marginBottom: "0.5rem",
            }}
          >
            Tools & <span style={{ color: "#9c40ff" }}>Frameworks</span>
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "var(--mk-text-muted)",
              lineHeight: 1.6,
            }}
          >
            What I primarily work with on a day-to-day basis.
          </p>
        </div>
      </FadeIn>

      <div
        className="relative flex w-full max-w-200 flex-col items-center justify-center overflow-hidden rounded-lg"
        ref={containerRef}
      >
        {/* Top Icons */}
        <div className="flex flex-col items-center gap-6 mt-10">
          {/* Row 1 */}
          <div className="flex gap-4">
            <Circle ref={r1n1}><IconFigma className="w-full h-full" /></Circle>
            <Circle ref={r1n2}><IconReact className="w-full h-full text-cyan-400" /></Circle>
            <Circle ref={r1n3}><IconTailwindCSS className="w-full h-full text-blue-400" /></Circle>
            <Circle ref={r1n4}><IconNodeJs className="w-full h-full text-green-500" /></Circle>
            <Circle ref={r1n5}><IconJavaScript className="w-full h-full" /></Circle>
            <Circle ref={r1n6}><IconHtml5 className="w-full h-full" /></Circle>
          </div>
          {/* Row 2 */}
          <div className="flex gap-4">
            <Circle ref={r2n1}><IconVercel className="w-full h-full text-white" /></Circle>
            <Circle ref={r2n2}><IconNextJs className="w-full h-full" /></Circle>
            <Circle ref={r2n3}><IconGatsby className="w-full h-full text-purple-500" /></Circle>
            <Circle ref={r2n4}><IconExpress className="w-full h-full text-gray-300" /></Circle>
            <Circle ref={r2n5}><IconMongoDB className="w-full h-full text-green-600" /></Circle>
          </div>
        </div>

        {/* Spacing down to center node */}
        <div className="h-48 w-full" />

        {/* Center Node (Logo) */}
        <div
          ref={centerRef}
          className="z-20 flex size-28 items-center justify-center rounded-full bg-linear-to-b from-purple-500/30 to-purple-900/30 border border-purple-500/50 shadow-[0_0_60px_-10px_rgba(156,64,255,0.6)] backdrop-blur-xl mb-10"
        >
          <span className="text-5xl font-bold font-sans tracking-tighter text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">F</span>
        </div>

        {/* Squashed Orbit Wrapper */}
        <div className="absolute inset-0 top-1/2 flex items-center justify-center scale-y-[0.35] pointer-events-none">
          {/* Outer Orbit */}
          <OrbitingCircles duration={30} radius={400}>
            <div className="scale-y-[2.85]"><IconGithub className="text-white size-8" /></div>
          </OrbitingCircles>
          <OrbitingCircles duration={30} radius={400} delay={15}>
            <div className="scale-y-[2.85]"><IconLinkedin className="text-blue-500 size-8" /></div>
          </OrbitingCircles>
          
          {/* Inner Orbit */}
          <OrbitingCircles duration={20} radius={280} reverse>
            <div className="scale-y-[2.85]"><IconTypescript className="text-blue-400 size-6" /></div>
          </OrbitingCircles>
          <OrbitingCircles duration={20} radius={280} reverse delay={10}>
            <div className="scale-y-[2.85]"><IconRedux className="text-purple-400 size-6" /></div>
          </OrbitingCircles>
        </div>

        {/* Beams */}
        <AnimatedBeam containerRef={containerRef} fromRef={r1n1} toRef={centerRef} duration={3} />
        <AnimatedBeam containerRef={containerRef} fromRef={r1n2} toRef={centerRef} duration={3} delay={0.5} />
        <AnimatedBeam containerRef={containerRef} fromRef={r1n3} toRef={centerRef} duration={3} delay={1.0} />
        <AnimatedBeam containerRef={containerRef} fromRef={r1n4} toRef={centerRef} duration={3} delay={1.5} />
        <AnimatedBeam containerRef={containerRef} fromRef={r1n5} toRef={centerRef} duration={3} delay={2.0} />
        <AnimatedBeam containerRef={containerRef} fromRef={r1n6} toRef={centerRef} duration={3} delay={2.5} />
        
        <AnimatedBeam containerRef={containerRef} fromRef={r2n1} toRef={centerRef} duration={4} curvature={30} />
        <AnimatedBeam containerRef={containerRef} fromRef={r2n2} toRef={centerRef} duration={4} delay={0.8} curvature={20} />
        <AnimatedBeam containerRef={containerRef} fromRef={r2n3} toRef={centerRef} duration={4} delay={1.6} />
        <AnimatedBeam containerRef={containerRef} fromRef={r2n4} toRef={centerRef} duration={4} delay={2.4} curvature={-20} />
        <AnimatedBeam containerRef={containerRef} fromRef={r2n5} toRef={centerRef} duration={4} delay={3.2} curvature={-30} />
      </div>
    </div>
  );
}
