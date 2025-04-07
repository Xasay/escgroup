import React from "react";
import classes from "./style.module.scss";
import { CustomParagraph } from "@/app/_components/shared/custom-paragraph";
import { CustomButton } from "@/app/_components/shared/custom-button";
import ContentContainer from "@/app/_components/containers/content-container";
import WebApps from "../../../../../../public/assets/images/webApps.svg";
import SeoIcon from "../../../../../../public/assets/images/seoIcon.svg";
import MobileAppsIcon from "../../../../../../public/assets/images/mobileApps.svg";
import ArVrSolutionsIcon from "../../../../../../public/assets/images/arVrSolutions.svg";

const Solutions = () => {
  return (
    <section className={classes.section}>
      <ContentContainer>
        <div className={classes.left}>
          <h3 className={classes.title}>
            Lorem Ipsum is simply dummy text of the printing.{" "}
          </h3>
          <CustomParagraph
            className={classes.desc}
            content=" KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens of completed
          projects."
          />
          <CustomButton
            className={classes.button}
            type={"button"}
            text={"Contact us"}
            bgColor="secondary"
          />
        </div>
        <div className={classes.right}>
          <div
            className={`${classes?.["grid-item"]} ${classes?.["grid-item-1"]}`}
          >
            <div className={classes.icon}>
              <WebApps />
            </div>
            <h4 className={classes.heading}>Web Application</h4>
          </div>
          <div
            className={`${classes?.["grid-item"]} ${classes?.["grid-item-2"]}`}
          >
            <div className={classes.icon}>
              <SeoIcon />
            </div>
            <h4 className={classes.heading}>SEO</h4>
          </div>
          <div
            className={`${classes?.["grid-item"]} ${classes?.["grid-item-3"]}`}
          >
            <div className={classes.icon}>
              <MobileAppsIcon />
            </div>
            <h4 className={classes.heading}>Mobile Applications</h4>
          </div>
          <div
            className={`${classes?.["grid-item"]} ${classes?.["grid-item-4"]}`}
          >
            <div className={classes.icon}>
              <ArVrSolutionsIcon />
            </div>
            <h4 className={classes.heading}>AR/VR</h4>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
};

export default Solutions;
