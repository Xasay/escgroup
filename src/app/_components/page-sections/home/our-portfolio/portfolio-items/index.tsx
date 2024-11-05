import React from "react";
import classes from "./style.module.scss";

type Props = {};

const PortfolioItems = (props: Props) => {
  return (
    <React.Fragment>
      <ul className={classes.list}>
        <li className={classes?.["list-item"]}> All</li>
        <li className={classes?.["list-item"]}> Web Design</li>
        <li className={classes?.["list-item"]}> Web Development</li>
        <li className={classes?.["list-item"]}> Graphic</li>
      </ul>
    </React.Fragment>
  );
};

export default PortfolioItems;
