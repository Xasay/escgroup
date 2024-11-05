import React from "react";
import classes from "./style.module.scss";

interface IContainer extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  padding?: string;
}

const ContentContainer = ({children}: IContainer) => {
  return <div className={classes["content-container"]}>{children}</div>;
};

export default ContentContainer;
