import Link from "next/link";
import React from "react";
import classes from "./style.module.scss";
import ContentContainer from "@/app/_components/containers/content-container";
import LanguageSelector from "./LanguageSelector";
import { cookies } from "next/headers";
import { defaultLocale, Locale } from "@/i18n/config";

type Props = {};

const NavbarDesktop = ({}: Props) => {

  const COOKIE_NAME = "NEXT_LOCALE";


  const defaultLocaleNavbar = cookies().get(COOKIE_NAME)?.value || defaultLocale as Locale

  return (
    <ContentContainer>
      <div
        className={`${classes["desktop-navbar"]}  p-4 items-center justify-between`}
      >
        <div className="flex-none w-32 grow-0">ESC Logo</div>

        <div className="flex">
          <ul className={`${classes["menu-list"]} flex `}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contactus">Contactus</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
           {/*  <li>
              <Link href="/portfolio">Portfolio</Link>
            </li> */}
          </ul>
          <LanguageSelector defaultLocale={defaultLocaleNavbar} />
        </div>
      </div>
    </ContentContainer>
  );
};

export default NavbarDesktop;
