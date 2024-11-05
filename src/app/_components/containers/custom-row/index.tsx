import React, { ReactNode, HTMLProps, FC } from "react";
//
import styles from "./style.module.scss";
interface IProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  justifySelf?: string;
  className?: string;
  maxWidth?: string;
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  margin?: string;
  padding?: string;
}

const Row: FC<IProps> = ({
  children,
  display = "flex",
  alignItems,
  justifyContent,
  justifySelf,
  flexDirection,
  className,
  width = "100%",
  margin,
  padding,
  maxWidth,
  style,
}) => {
  return (
    <div
      style={{
        display,
        width,
        maxWidth,
        flexDirection,
        alignItems,
        justifyContent,
        justifySelf,
        margin,
        padding,
        ...style,
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default Row;
