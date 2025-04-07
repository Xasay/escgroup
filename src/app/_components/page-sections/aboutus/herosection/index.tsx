import React from "react";
import classes from "./style.module.scss";
import AboutHeroMesh from "../../../../../../public/assets/images/aboutheromesh.svg";
import AboutHeroBgOne from "../../../../../../public/assets/images/aboutherobgone.svg";
import AboutHeroBgTwo from "../../../../../../public/assets/images/aboutherobgtwo.svg";
import Image from "next/image";
import imageleftgridone from "../../../../../../public/assets/images/aboutheroleftgridone.jpg";
import imageleftgridtwo from "../../../../../../public/assets/images/aboutheroleftgridtwo.jpg";
import imageleftgridthree from "../../../../../../public/assets/images/aboutheroleftgridthree.jpg";
import imagerightgrid from "../../../../../../public/assets/images/aboutherorightgrid.jpg";

import { CustomHeading } from "@/app/_components/shared/custom-heading";
import { CustomParagraph } from "@/app/_components/shared/custom-paragraph";

const AboutPageHeroSection = () => {
  return (
    <section className={classes?.["hero-section"]}>
      <div className={classes?.["container"]}>
        <div className={classes.content}>
          <div className={classes.inner}>
            <div>
              <div className={`${classes?.["grid-container"]}`}>
                <div
                  className={`${classes?.["grid-item"]} ${classes?.["grid-item--1"]}`}
                >
                  <Image src={imageleftgridone} alt="Team brainstorming" fill />
                </div>
                <div
                  className={`${classes?.["grid-item"]}  ${classes?.["grid-item--2"]} `}
                >
                  <Image src={imageleftgridtwo} alt="Team brainstorming" fill />
                </div>
                <div
                  className={`${classes?.["grid-item"]}   ${classes?.["grid-item--3"]}`}
                >
                  <Image
                    src={imageleftgridthree}
                    alt="Team brainstorming"
                    fill
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <CustomHeading
                className={`${classes?.["hero-right-title"]}`}
                content="About us"
              />
              <CustomParagraph
                className={`${classes?.["hero-right-desc"]}`}
                content="Lorem Ipsum is simply dummy text of the printing. "
              />
              <div className={`${classes?.["hero-right-image"]}`}>
                <Image src={imagerightgrid} alt="Team brainstorming" fill />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.mesh}>
          <AboutHeroMesh />
        </div>
        <div className={classes.absolutebgleft}>
          <AboutHeroBgOne />
        </div>
        <div className={classes.absolutebgright}>
          <AboutHeroBgTwo />
        </div>
      </div>
    </section>
  );
};

export default AboutPageHeroSection;
