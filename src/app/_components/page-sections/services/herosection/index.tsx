import React from "react";
import classes from "./style.module.scss";
import ContentContainer from "@/app/_components/containers/content-container";
import { CustomHeading } from "@/app/_components/shared/custom-heading";
import { CustomParagraph } from "@/app/_components/shared/custom-paragraph";
import MegaPhone from "../../../../../../public/assets/images/megaphone.svg";
import WebApps from "../../../../../../public/assets/images/webApps.svg";
import SeoIcon from "../../../../../../public/assets/images/seoIcon.svg";
import MobileAppsIcon from "../../../../../../public/assets/images/mobileApps.svg";
import ArVrSolutionsIcon from "../../../../../../public/assets/images/arVrSolutions.svg";

const HeroSection = () => {
  return (
    <section className={classes.hero}>
      <ContentContainer className="flex flex-col justify-center items-center">
        <div className={classes.banner}>
          <div className={classes.icon}>
            <MegaPhone />
          </div>
          <h1>
            Our <span>Services</span>
          </h1>
          <CustomParagraph
            className={classes.desc}
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
          />
        </div>
        <div className={classes.content}>
          <div
            className={`${classes?.["grid-item"]} ${classes?.["grid-item-1"]}`}
          >
            <div className={classes.icon}>
              <WebApps />
            </div>
            <span className={classes.text}>
              <h3>Web Application</h3>
              <CustomParagraph content="The simplest but robust technology to accompany with you" />
            </span>
          </div>
          <div
            className={`${classes?.["grid-item"]} ${classes?.["grid-item-2"]}`}
          >
            <div className={classes.icon}>
              <SeoIcon />
            </div>
            <span className={classes.text}>
              <h3>SEO</h3>
              <CustomParagraph content="The simplest but robust technology to accompany with you" />
            </span>
          </div>
          <div
            className={`${classes?.["grid-item"]} ${classes?.["grid-item-3"]}`}
          >
            <div className={classes.icon}>
              <MobileAppsIcon />
            </div>
            <span className={classes.text}>
              <h3>Mobile Applications</h3>
              <CustomParagraph content="The simplest but robust technology to accompany with you" />
            </span>
          </div>
          <div
            className={`${classes?.["grid-item"]} ${classes?.["grid-item-4"]}`}
          >
            <div className={classes.icon}>
              <ArVrSolutionsIcon />
            </div>
            <span className={classes.text}>
              <h3>AR/VR Solutions</h3>
              <CustomParagraph content="The simplest but robust technology to accompany with you" />
            </span>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
};

export default HeroSection;
