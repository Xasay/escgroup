import React from "react";
import Navbar from "../../shared/navbar";
import calsses from "./style.module.scss";

type Props = {};

const Header = ({}: Props) => {
  return (
    <header className={calsses?.header}>
      <Navbar />
    </header>
  );
};

export default Header;
