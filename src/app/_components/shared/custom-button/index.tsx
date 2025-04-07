import { CSSProperties } from "react";
import styles from "./style.module.scss";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: "button" | "submit" | "reset";
  margin?: string;
  padding?: string;
  text: string;
  bgColor?: string;
  className?: string;
  size?: string;
  maxWidth?: string;
  fontSize?: string;
  maxHeight?: string;
  style?: CSSProperties;
}

export const CustomButton = ({
  type,
  text,
  className = "",
  margin,
  padding,
  size,
  bgColor = "primary",
  maxWidth,
  maxHeight,
  style,
  fontSize,
  ...props
}: IButton) => {
  return (
    <button
      style={{ maxWidth, margin, padding, maxHeight, fontSize, ...style }}
      type={type ? type : "button"}
      className={`${className}  ${styles.mainButton} ${styles[bgColor]}`}
      {...props}
    >
      {text}
    </button>
  );
};
