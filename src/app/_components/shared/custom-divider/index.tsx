import React from "react";
import classes from "./style.module.scss";

type Props = {};

const CustomDivider = (props: Props) => {
  return (
    <div className={classes?.spacer}>
      <div className={classes?.line}>
        <div className={classes?.dot}></div>
        <div className={classes?.dot}></div>
        <div className={classes?.dot}></div>
      </div>
    </div>
  );
};

export default CustomDivider;
