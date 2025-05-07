import AboutLandingPage from "@/components/AboutLandingPage";
import Counts from "@/components/Counts";
import Mission from "@/components/Mission";
import Newsletters from "@/components/Newsletters";
import Team from "@/components/Team";
import Vision from "@/components/Vision";
import React from "react";

export default function AboutPage() {
  return (
    <section>
      <AboutLandingPage />
      <Vision />
      <Mission />
      <Team />
      <Counts />
      <Newsletters />
    </section>
  );
}
