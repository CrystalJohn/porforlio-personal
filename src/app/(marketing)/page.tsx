"use client";

import { useEffect } from "react";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingHero } from "@/components/marketing/MarketingHero";
import { MarketingProjects } from "@/components/marketing/MarketingProjects";
import { MarketingSkills } from "@/components/marketing/MarketingSkills";
import { MarketingContact } from "@/components/marketing/MarketingContact";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";

export default function EntryPage() {
  useEffect(() => {
    // Ensure landing page always opens from the hero area.
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div
      className="min-h-screen text-white relative overflow-x-hidden selection:bg-blue-500/20 mk-theme"
      style={{ fontFamily: "var(--font-dm-sans, sans-serif)", backgroundColor: "var(--mk-bg, #050505)" }}
    >
      {/* Ambient glows based on Marketing Tokens */}
      <div 
        className="pointer-events-none fixed z-0 glow-top-left" 
        style={{ top: 0, left: 0, width: "60vw", height: "60vh", background: "radial-gradient(ellipse at top left, rgba(118, 60, 172, 0.15) 0%, transparent 70%)" }} 
      />
      <div 
        className="pointer-events-none fixed z-0 glow-bottom-right" 
        style={{ bottom: 0, right: 0, width: "40vw", height: "40vh", background: "radial-gradient(ellipse at bottom right, rgba(50, 15, 133, 0.15) 0%, transparent 70%)" }} 
      />

      <MarketingHeader />
      <MarketingHero />
      <MarketingProjects />
      <MarketingSkills />
      <MarketingContact />
      <MarketingFooter />

    </div>
  );
}


