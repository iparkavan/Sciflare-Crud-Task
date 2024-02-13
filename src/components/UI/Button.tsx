import React from "react";

interface buttonProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<buttonProps> = ({
  children,
  className,
  color,
  onClick,
  type,
  ...props
}) => {
  return (
    <button
      className={`text-white drop-shadow-md active:drop-shadow-xl duration-150 active:ring-2 ring-blue-500 ring-offset-1 transition-all ${className}`}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
