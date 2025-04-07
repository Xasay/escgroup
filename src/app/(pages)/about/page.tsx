import AboutPageHeroSection from "@/app/_components/page-sections/aboutus/herosection";
import Solutions from "@/app/_components/page-sections/aboutus/solutions";
import WhatWeDo from "@/app/_components/page-sections/aboutus/whatwedo";
import Subscribe from "@/app/_components/page-sections/home/subscribe";
import React from "react";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <>
      <AboutPageHeroSection />
      <WhatWeDo />
      <Solutions />
      <Subscribe />
    </>
  );
};

export default AboutPage;
