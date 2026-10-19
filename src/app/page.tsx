"use client";

import React from "react";
import { Hero } from "@/components/Hero";
import { WelcomeSection } from "@/components/WelcomeSection";
import { RoomsSection } from "@/components/RoomsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Gallery } from "@/components/Gallery";
import { AboutSection } from "@/components/AboutSection";
import { LocationSection } from "@/components/LocationSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WelcomeSection />
      <RoomsSection />
      <ExperienceSection />
      <Gallery />
      <AboutSection />
      <LocationSection />
    </>
  );
}
