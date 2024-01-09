import React from "react";

interface InputProps {
  type: string;
  className?: string; // Optional class names
  value?: string | number; // Optional initial value
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  type,
  className = "",
  value = "",
  onChange,
}) => {
  return (
    <input
      type={type}
      className={className}
      value={value}
      onChange={onChange}
    />
  );
};
