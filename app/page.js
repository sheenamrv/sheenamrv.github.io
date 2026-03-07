"use client";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ExperiencesSection from "./components/ExperiencesSection";
import PanelSection from "./components/PanelList";
import FooterSection from "./components/FooterSection";
import ProjectsSection from "./components/ProjectsSection";
import QuoteSection from "./components/QuoteSection";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// ..

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    // This is where you add the pages you create ffffff 0F1524
    <body className="!bg-[#0A001A] !outline-none !shadow-none">
      <main className="flex min-h-screen flex-col bg-[#0A001A] mx-auto py-8 px-6 sm:px-12 lg:px-16 outline-none shadow-none">
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        {/* <div className="border-t-2 border-[#577BE6]"></div> */}
        <AboutSection></AboutSection>
        <QuoteSection></QuoteSection>
        <ExperiencesSection></ExperiencesSection>
        {/* <ProjectsSection></ProjectsSection> */}
        {/* <div className="border-t-2 border-[#577BE6]"></div> */}
        <FooterSection></FooterSection>
      </main>
    </body>
  );
}
