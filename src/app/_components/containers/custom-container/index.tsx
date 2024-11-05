import React from "react";

interface IContainer extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  padding?: string;
}

const CustomContainer = ({ children, style, padding }: IContainer) => {
  return (
    <div className="center" style={{ padding, ...style }}>
      {children}
    </div>
  );
};

export default CustomContainer;
