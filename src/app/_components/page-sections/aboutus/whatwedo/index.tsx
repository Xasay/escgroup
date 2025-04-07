import React from "react";
import ContentContainer from "@/app/_components/containers/content-container";
import { CustomHeading } from "@/app/_components/shared/custom-heading";
import { CustomParagraph } from "@/app/_components/shared/custom-paragraph";
import classes from "./style.module.scss";

const WhatWeDo = () => {
  return (
    <section>
      <ContentContainer>
        <div className="flex flex-col">
          <CustomHeading
            className={`${classes.heading}`}
            content="Lorem Ipsum is simply dummy text of the printing. "
          />
          <CustomParagraph
            className={`${classes.desc}`}
            content="ESC Group LLC is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. We build and develop mobile applications for several top platforms, including Android  & IOS. "
          />
        </div>
      </ContentContainer>
    </section>
  );
};

export default WhatWeDo;
