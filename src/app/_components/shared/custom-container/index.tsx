import { HTMLProps, ReactNode } from "react";
import styles from "./style.module.scss";

interface IContainer extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  paddingInline?: string;
  padding?: string;
  paddingTop?: string;
  style?: any;
  className?: string;
}

export const CustomContainer = ({
  children,
  paddingInline,
  padding,
  paddingTop,
  style,
  className = "",
}: IContainer) => {
  return (
    <div
      className={`${className} ${styles.customContainer} `}
      style={{ paddingInline, padding, paddingTop, ...style }}
    >
      {children}
    </div>
  );
};
