import React from "react";
import classes from "./style.module.scss";
import Link from "next/link";

type Props = {};

const NavbarMobil = ({}: Props) => {
  return (
    <div className={`${classes.container} ${classes["nav-mobil-container"]}`}>
      <input className={classes.checkbox} type="checkbox" name="" id="" />
      <div className={classes["hamburger-lines"]}>
        <span className={`${classes.line} ${classes.line1}`}></span>
        <span className={`${classes.line} ${classes.line2}`}></span>
        <span className={`${classes.line} ${classes.line3}`}></span>
      </div>
      <div className={classes["menu-items"]}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="#">Blogs</Link>
        </li>
        <li>
          <Link href="#">Portfolio</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </div>
    </div>
  );
};

export default NavbarMobil;
