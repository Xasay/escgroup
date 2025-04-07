import React from "react";
import classes from "./style.module.scss";

const CounterSection = () => {
  return (
    <section className={classes.countersection}>
      <div className={classes.inner}>
        <div className={classes.item}>
          <span className={classes.count}>6</span>
          <p className={classes.desc}>Happy Clients</p>
        </div>
        <div className={classes.item}>
          <span className={classes.count}>11</span>
          <p className={classes.desc}>Completed Projects</p>
        </div>
        <div className={classes.item}>
          <span className={classes.count}>7M</span>
          <p className={classes.desc}>Transsactions</p>
        </div>
        <div className={classes.item}>
          <span className={classes.count}>6000+</span>
          <p className={classes.desc}>Customers</p>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
