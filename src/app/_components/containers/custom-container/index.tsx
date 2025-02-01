import React from "react";

interface IContainer extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  padding?: string;
}

const CustomContainer = ({
  children,
  style,
  padding,
  className,
  ...props
}: IContainer) => {
  return (
    <div
      {...props}
      className={`center ${className}`}
      style={{ padding, ...style }}
    >
      {children}
    </div>
  );
};

export default CustomContainer;
