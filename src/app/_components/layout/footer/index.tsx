import React from "react";
import classes from "./style.module.scss";
import ContentContainer from "../../containers/content-container";
import Link from "next/link";
import Facebook from "../../../../../public/assets/images/facebook.svg";
import Instagram from "../../../../../public/assets/images/instagram.svg";
import Linkedin from "../../../../../public/assets/images/linkedin.svg";

const Footer = () => {
  return (
    <footer>
      <ContentContainer>
        <div className={`${classes.footer} flex justify-between`}>
          <div className={`${classes["logo-container"]} grow-[0]`}>
            <span className="logo">
              <Link href="/">Logo</Link>
            </span>
            <p className={`${classes["logo-desc"]}`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div
            className={`${classes.menu} grow-[1] flex flex-col items-center`}
          >
            <h4>About us</h4>
            <Link href={"services"}>Services</Link>
            <Link href={"contactus"}>Contact us</Link>
            <Link href={"services"}>Portfolio</Link>
          </div>
          <div className={`${classes.phone} grow-[1]`}>
            <p>Contact us at the phone number below.</p>
            <a href="tel:+994503008336">+994503008336</a>
          </div>
          <div className={`${classes.social} grow-[0]`}>
            <a href="#">
              <Facebook />
            </a>
            <a href="#">
              <Instagram />
            </a>
            <a href="#">
              <Linkedin />
            </a>
          </div>
        </div>
      </ContentContainer>

      <div
        className={`${classes["copyright"]} flex justify-center align-center`}
      >
        Copyright ® 2025 ESC Group all rights reserved
      </div>
    </footer>
  );
};

export default Footer;
