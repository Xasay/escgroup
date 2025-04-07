"use client";
import React, { ChangeEvent } from "react";
import classes from "./style.module.scss";
import { CustomHeading } from "@/app/_components/shared/custom-heading";
import CustomInput from "@/app/_components/shared/custom-input";
import { CustomButton } from "@/app/_components/shared/custom-button";

const Subscribe = () => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  };

  return (
    <div className={`${classes.subscribe}`}>
      <div className={classes.inner}>
        <CustomHeading content={"Subscribe to us"} className={`${classes.title} text-center`} />
        <div className={`${classes.form} flex justify-center items-center`}>
          <CustomInput
            type="text"
            name="phone"
            onChange={onChange}
            placeholder="Enter your email"
            style={{ backgroundColor: "white" }}
          />
          <CustomButton
            className={classes?.["form-button"]}
            bgColor="primary"
            type="submit"
            text="Subscribe"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
