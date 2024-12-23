import React from "react";
import classes from "./style.module.scss";
import NavbarMobil from "./navbar-mobil";
import NavbarDesktop from "./navbar-desktop";
import CustomContaiiner from "../../containers/custom-container";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav>
      <div className={classes["navbar"]}>
        <NavbarDesktop />
        <NavbarMobil />
      </div>
    </nav>
  );
};

export default Navbar;
