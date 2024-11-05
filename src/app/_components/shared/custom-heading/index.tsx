interface IHeading extends React.HTMLAttributes<HTMLHeadingElement> {
  type?: string;
  content: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  color?: string;
  margin?: string;
  padding?: string;
}

export const CustomHeading = ({
  type = "h2",
  content,
  className = "",
  fontSize,
  fontWeight,
  lineHeight,

  color = "#000",
  margin,
  padding,
  style,
}: IHeading) => {
  const Tag = type as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={`${className}`}
      style={{
        fontSize,
        fontWeight,
        lineHeight,
        color,
        margin,
        padding,
        ...style,
      }}
    >
      {content}
    </Tag>
  );
};
