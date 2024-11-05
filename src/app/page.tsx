import React from "react";
import WeAreAwesomeAgency from "./_components/page-sections/home/we-are-awesome-agency";
import WhyChooseUsSection from "./_components/page-sections/home/why-choose-us";
import OurPortfolio from "./_components/page-sections/home/our-portfolio";
import OurTeam from "./_components/page-sections/home/our-team";
import Contactus from "./_components/page-sections/home/contactus";

export default function Home() {
  return (
    <React.Fragment>
      <WeAreAwesomeAgency />
      <WhyChooseUsSection />
      <OurPortfolio />
      <OurTeam />
      <Contactus />
    </React.Fragment>
  );
}
