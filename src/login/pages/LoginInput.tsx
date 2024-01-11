import React from "react";
import { useFormContext } from "react-hook-form";
import { ILoginRequest } from "../interfaces/loginRequest";

const LoginInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ILoginRequest>();
  return (
    <>
      <div className="mb-2">
        <label className=" text-small font-regularBold text-gray-dark">
          Email
        </label>
        <input
          className=" w-full px-4 py-2 mt-2  bg-gray-light"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-error">{errors.email.message}</span>
        )}
      </div>
      <div className="mb-2">
        <label className=" text-small font-regularBold text-gray-dark">
          Password
        </label>
        <input
          className=" w-full px-4 py-2 mt-2  bg-gray-light"
          {...register("password")}
        />
        {errors.password && (
          <span className="text-error">{errors.password.message}</span>
        )}
      </div>

      <a href="#" className="text-small m-auto text-right">
        Forget Password?
      </a>
      <div className="mt-6">
        <button
          type="submit"
          className="w-full px-4 py-2 bg-primary text-white"
        >
          Sign In
        </button>
      </div>
    </>
  );
};

export default LoginInput;
