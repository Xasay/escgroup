import React, { CSSProperties } from "react";
import styles from "./style.module.scss";

interface IProps {
  label?: string;
  type: "text" | "number" | "password" | "email";
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  name?: string;
  customref?: any;
  style?: CSSProperties;
  onChange?: (e: any) => void;
}
const CustomInput = ({
  label,
  type,
  placeholder,
  required = false,
  autoComplete,
  name = "",
  customref,
  style,
  onChange,
}: IProps) => {
  return (
    <div className={styles?.["input-container"]}>
      {label && <label className={styles?.["input-label"]}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        className={styles?.["input"]}
        required={required}
        autoComplete={autoComplete}
        name={name}
        ref={customref}
        onChange={onChange}
        style={style}
      />
    </div>
  );
};

export default CustomInput;
