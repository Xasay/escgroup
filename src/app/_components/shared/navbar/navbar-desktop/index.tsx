"use client";
import Link from "next/link";
import React from "react";
import classes from "./style.module.scss";
import DropDown from "../../language-selector";
import Azeflag from "../../../../../../public/assets/azeflag.svg";
import Rusflag from "../../../../../../public/assets/russiaflag.svg";
import Usaflag from "../../../../../../public/assets/usaflag.svg";
import ContentContainer from "@/app/_components/containers/content-container";

type Props = {};

const NavbarDesktop = ({}: Props) => {
  const [val, setVal] = React.useState(7);

  const handleChange = (event: any) => {
    setVal(event.target.value);
  };
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
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
          </ul>
          <DropDown
            value={val}
            handleChange={handleChange}
            items={[
              { key: <Azeflag />, value: 7 },
              { key: <Rusflag />, value: 28 },
              { key: <Usaflag />, value: 29 },
            ]}
          />
        </div>
      </div>
    </ContentContainer>
  );
};

export default NavbarDesktop;
