"use client";
import { useEffect } from "react";
import Aos from "aos";

import Donations from "@/components/Home/Donations";
import HeroSection from "@/components/Home/HeroSection";
import Partners from "@/components/Home/Partners";
import Presale from "@/components/Home/Presale";
import Roadmap from "@/components/Home/Roadmap";
import Team from "@/components/Home/Team";
import Tokenomics from "@/components/Home/Tokenomics";
import WhyInvest from "@/components/Home/WhyInvest";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <main className="w-full min-h-screen bg-transparent">
      <HeroSection />
      <WhyInvest />
      <Tokenomics />
      <Presale />
      <Donations />
      <Roadmap />
      <Team />
      <Partners />
    </main>
  );
}
