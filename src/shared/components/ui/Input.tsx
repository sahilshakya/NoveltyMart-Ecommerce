import React from "react";
import { UseFormRegister } from "react-hook-form";
import { IOrderRequest } from "../../../checkout/interfaces/orderRequest";

interface InputProps {
  register: UseFormRegister<IOrderRequest>;
  field: keyof IOrderRequest;
  className?: string;
}

export const Input: React.FC<InputProps> = ({ register, field, className }) => {
  return (
    <input
      type="text"
      className={`w-full px-4 py-2 mt-2 bg-gray-light mb-2 ${className}`}
      {...register(field)}
    />
  );
};
