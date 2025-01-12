import React from "../lib/react.js";

interface switchProps {
  // 필수 (required)
  children: React.ReactNode;
  // 선택 (optional)
  size?: "small" | "big";
  className?: string;
  style?: Record<string, string | number>;
}

function Switch({
  children,
  size,
  className = "",
  style,
  ...restProps // 나머지 props
}: switchProps) {
  console.log(restProps);

  let sizeClassName = "";

  if (size) {
    sizeClassName = `box--${size}`;
  }

  const classNames = `box ${sizeClassName} ${className}`.trim();

  return React.createElement(
    "button",
    {
      className: classNames,
      style: {
        backgroundColor: "#004FFF",
        ...style,
      },
      ...restProps, // { id, title, translate, 'aria-label' }
    },
    children
  );
}
export default Switch;
