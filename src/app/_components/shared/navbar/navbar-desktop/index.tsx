"use client";
import Link from "next/link";
import React from "react";
import classes from "./style.module.scss";
import DropDown from "../../language-selector";

type Props = {};

const NavbarDesktop = ({}: Props) => {
  const [val, setVal] = React.useState(7);

  const handleChange = (event: any) => {
    setVal(event.target.value);
  };
  return (
    <div
      className={`${classes["desktop-navbar"]}  p-4 items-center justify-center`}
    >
      <div className="flex-none w-32 grow-0 bg-slate-50">ESC Logo</div>
      <div className="flex-3 grow bg-slate-100 flex items-center justify-center">
        <ul
          className={`${classes["menu-list"]} flex items-center justify-between`}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contacts">Contactus</Link>
          </li>
        </ul>
      </div>
      <div className="flex-none w-32 grow-0  bg-slate-200">
        <DropDown
          value={val}
          handleChange={handleChange}
          items={[
            { key: "AZ", value: 7 },
            { key: "EN", value: 28 },
          ]}
        />
      </div>
    </div>
  );
};

export default NavbarDesktop;
