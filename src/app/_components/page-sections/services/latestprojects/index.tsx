import React from "react";
import ContentContainer from "@/app/_components/containers/content-container";
import projectone from "../../../../../../public/assets/images/projectone.jpg";
import classes from "./style.module.scss";

import Image from "next/image";

const OurLatestProject = () => {
  return (
    <section>
      <ContentContainer>
        <h2 className={classes.heading}>Our latest Projects</h2>
        <div className={`${classes?.["projects-container"]}`}>
          <div className={`${classes?.["projects-item"]}`}>
            <div className={`${classes?.["projects-item-image"]}`}>
              <Image
                src={projectone}
                alt="Project 1"
                className={`${classes?.["projects-item-image"]}`}
                fill
              />
            </div>
            <div className={`${classes?.["projects-item-content"]}`}>
              <h3>Project Title 1</h3>
              <p>Project description goes here.</p>
            </div>
          </div>
          <div className={`${classes?.["projects-item"]}`}>
            <div className={`${classes?.["projects-item-image"]}`}>
              <Image
                src={projectone}
                alt="Project 1"
                className={`${classes?.["projects-item-image"]}`}
                fill
              />
            </div>
            <div className={`${classes?.["projects-item-content"]}`}>
              <h3>Project Title 1</h3>
              <p>Project description goes here.</p>
            </div>
          </div>
          <div className={`${classes?.["projects-item"]}`}>
            <div className={`${classes?.["projects-item-image"]}`}>
              <Image
                src={projectone}
                alt="Project 1"
                className={`${classes?.["projects-item-image"]}`}
                fill
              />
            </div>
            <div className={`${classes?.["projects-item-content"]}`}>
              <h3>Project Title 1</h3>
              <p>Project description goes here.</p>
            </div>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
};

export default OurLatestProject;
