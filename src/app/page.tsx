import React from "react";
import WeAreAwesomeAgency from "./_components/page-sections/home/we-are-awesome-agency";
import WhyChooseUsSection from "./_components/page-sections/home/why-choose-us";
import OurPortfolio from "./_components/page-sections/home/our-portfolio";
import OurTeam from "./_components/page-sections/home/our-team";
import Contactus from "./_components/page-sections/home/contactus";

interface IProps {}

export default async function Home({}: IProps) {
  return (
    <React.Fragment>
      <WeAreAwesomeAgency />
      <WhyChooseUsSection />
      <OurPortfolio />
      {/* <OurTeam /> */}
      <Contactus />
    </React.Fragment>
  );
}
