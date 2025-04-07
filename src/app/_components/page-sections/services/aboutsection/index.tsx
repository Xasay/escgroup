import React from "react";
import ContentContainer from "@/app/_components/containers/content-container";
import classes from "./style.module.scss";
import { CustomParagraph } from "@/app/_components/shared/custom-paragraph";
import { CustomButton } from "@/app/_components/shared/custom-button";
import Image from "next/image";
import ilustration from "../../../../../../public/assets/images/serviceillustration.jpg";

const AboutSection = () => {
  return (
    <section>
      <ContentContainer>
        <div className={classes?.inner}>
          <div className={classes.left}>
            <h2 className={classes?.heading}>
              <span>Lorem Ipsum</span> is simply dummy text of the printing.
            </h2>
            <CustomParagraph
              className={classes?.paragraph}
              content="KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. 
KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens "
            />

            <CustomButton
              className={classes.button}
              type={"button"}
              text={"Contact us"}
              bgColor="secondary"
            />
          </div>
          <div className={classes.right}>
            <Image src={ilustration} alt="illustration" fill />
          </div>
        </div>
      </ContentContainer>
    </section>
  );
};

export default AboutSection;
