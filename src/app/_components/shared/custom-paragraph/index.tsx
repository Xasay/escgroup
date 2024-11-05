import styles from "./style.module.scss";
interface IParagraph {
  content?: string;
  className?: string;
  fontSize?: string;
  margin?: string;
  padding?: string;
  color?: string;
  textAlign?: string;
  style?: any;
}

export const CustomParagraph = ({
  content,
  fontSize,
  margin,
  padding,
  color,
  textAlign,
  style,
  className = "",
}: IParagraph) => {
  return (
    <p
      className={`${className}`}
      style={{
        fontSize,
        color,
        margin,
        padding,
        textAlign,
        ...style,
      }}
    >
      {content}
    </p>
  );
};
