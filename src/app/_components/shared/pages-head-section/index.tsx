import React from "react";
import CustomBreadcrumb from "../custom-breadcrumb";
import { CustomContainer } from "../custom-container";
import { DesktopLogo, MobileLogo } from "./icons";
import styles from "./style.module.scss";
import { CustomHeading } from "../custom-heading";

interface IProps {
  title: string;
}

const PageHeadSection = ({ title }: IProps) => {
  return (
    <section>
      <CustomContainer className={styles.container} padding="0">
        <div className={styles.background}>
          <div className={styles?.["desktop-logo"]}>
            <DesktopLogo />
          </div>
          <div className={styles?.["mobile-logo"]}>
            <MobileLogo />
          </div>
        </div>
        <CustomContainer className={styles?.["content-container"]}>
          <CustomBreadcrumb homeElement="Home" separator=">" />
          <CustomHeading content={title} className={styles?.title} />
        </CustomContainer>
      </CustomContainer>
    </section>
  );
};

export default PageHeadSection;
