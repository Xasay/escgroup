"use client"
import React from "react";
import styles from "./style.module.scss";
interface IProps {
  label?: string;
  rows?: number;
  cols?: number;
  name?: string;
  onChange?: (e: any) => void;
}

const TextArea = ({ label, rows, cols, name, onChange }: IProps) => {
  return (
    <div className={styles?.["textarea-container"]}>
      <label className={styles?.["textarea-label"]}> {label} </label>
      <textarea
        name={name}
        className={styles?.["textarea"]}
        rows={rows}
        cols={cols}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default TextArea;
