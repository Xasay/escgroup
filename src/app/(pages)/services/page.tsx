import Subscribe from "@/app/_components/page-sections/home/subscribe";
import AboutSection from "@/app/_components/page-sections/services/aboutsection";
import CounterSection from "@/app/_components/page-sections/services/countersection";
import HeroSection from "@/app/_components/page-sections/services/herosection";
import OurLatestProject from "@/app/_components/page-sections/services/latestprojects";
import React from "react";

const ServicesPage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CounterSection />
      <OurLatestProject />
      <Subscribe />
    </>
  );
};

export default ServicesPage;
