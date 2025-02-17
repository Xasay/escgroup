import React from "react";
import classes from "./style.module.scss";
import HeroLayerFirst from "@/../public/assets/images/herolayerfirst.svg";
import HeroLayerSecond from "@/../public/assets/images/herolayersecond.svg";
import HeroSectionImage from "@/../public/assets/images/herosectionimage.svg";
import HeroItemFirst from "@/../public/assets/images/hero-item1.svg";
import HeroItemSecond from "@/../public/assets/images/hero-item2.svg";
import HeroItemThird from "@/../public/assets/images/hero-item3.svg";
import HeroItemForth from "@/../public/assets/images/hero-item4.svg";
import { CustomParagraph } from "@/app/_components/shared/custom-paragraph";
import { CustomButton } from "@/app/_components/shared/custom-button";
import Link from "next/link";
const HeroSection = () => {
  return (
    <section>
      <div className={classes.backgroundlayer}>
        <div className={classes.firstlayerimg}>
          <HeroLayerFirst />
        </div>
        <div className={classes.secondlayerimg}>
          <HeroLayerSecond />
        </div>
        <div className={classes.herosectioncontent}>
          <div className={classes?.["herocontent-top"]}>
            <div className={classes?.["herocontent-inner"]}>
              <div className={classes?.["herocontent-top-left"]}>
                <h1 className={classes["hero-heading"]}>
                  Experienced
                  <span className={classes.highlight}> mobile and web </span>
                  applications and website builders measuring.
                </h1>
                <CustomParagraph
                  content="ESC Group LLC is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. "
                  className={classes["hero-paragraph"]}
                />
                <Link href="/contactus">
                  <CustomButton
                    text="Contact us"
                    className={classes?.["hero-button"]}
                    bgColor="primary"
                    type="button"
                  />
                </Link>
              </div>
              <div className={classes?.["herocontent-top-rigth"]}>
                <HeroSectionImage />
              </div>
            </div>
          </div>
          <div className={classes?.["herocontent-bottom"]}>
            <div
              className={`${classes?.["herocontent-inner"]} flex justify-between items-center`}
            >
              <div className={classes?.["hero-bottom-item"]}>
                <div
                  className={`${classes?.["hero-bottom-item-img"]}  ${classes?.["purple"]}`}
                >
                  <HeroItemFirst />
                </div>
                <div className={`${classes?.["hero-bottom-item-text"]}`}>
                  <h3 className={classes["hero-bottom-item-heading"]}>
                    Web Application
                  </h3>
                  <span className={classes["hero-bottom-item-desc"]}>Desc</span>
                </div>
              </div>

              <div className={classes?.["hero-bottom-item"]}>
                <div
                  className={`${classes?.["hero-bottom-item-img"]}  ${classes?.["green"]}`}
                >
                  <HeroItemSecond />
                </div>
                <div className={`${classes?.["hero-bottom-item-text"]}`}>
                  <h3 className={classes["hero-bottom-item-heading"]}>SEO</h3>
                  <span className={classes["hero-bottom-item-desc"]}>Desc</span>
                </div>
              </div>

              <div className={classes?.["hero-bottom-item"]}>
                <div
                  className={`${classes?.["hero-bottom-item-img"]}  ${classes?.["blue"]}`}
                >
                  <HeroItemThird />
                </div>
                <div className={`${classes?.["hero-bottom-item-text"]}`}>
                  <h3 className={classes["hero-bottom-item-heading"]}>
                    AR/VR Solutions
                  </h3>
                  <span className={classes["hero-bottom-item-desc"]}>Desc</span>
                </div>
              </div>
              <div className={classes?.["hero-bottom-item"]}>
                <div
                  className={`${classes?.["hero-bottom-item-img"]}  ${classes?.["red"]}`}
                >
                  <HeroItemForth />
                </div>
                <div className={`${classes?.["hero-bottom-item-text"]}`}>
                  <h3 className={classes["hero-bottom-item-heading"]}>
                    Mobile Applications
                  </h3>
                  <span className={classes["hero-bottom-item-desc"]}>Desc</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
