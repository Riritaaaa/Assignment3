import React from "react";

interface props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  direction: "row" | "column" | "row-reverse" | "column-reverse";
  justify:
    | "center"
    | "space-between"
    | "space-evenly"
    | "flex-start"
    | "flex-end";
}
const FlexBox: React.FC<props> = ({
  children,
  className,
  direction,
  justify,
  ...props
}) => {
  return (
    <div
      className={`${className ? className : ""} flex`}
      {...props}
      style={{
        flexDirection: direction,
        justifyContent: justify,
      }}
    >
      {children}
    </div>
  );
};

export default FlexBox;
