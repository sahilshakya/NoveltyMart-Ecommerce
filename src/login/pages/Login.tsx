import H4 from "../../shared/components/H4";
import { ILoginRequest } from "../interfaces/loginRequest";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../schemas/LoginSchema";
import LoginInput from "./LoginInput";
import { loginHandler } from "../utils";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const defaultValues = {
  email: "",
  password: "",
};

const Login: React.FC = () => {
  const navigate = useNavigate();

  const methods = useForm<ILoginRequest>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const onSubmit = async (data: ILoginRequest) => {
    try {
      const resp = await loginHandler({ data });
      if (resp) {
        useAuthStore.getState().setIsAuthenticated(true);

        navigate("/");
      } else {
        console.error("Login failed");
      }
      return resp;
    } catch (error) {
      console.log("login error", error);
    }
  };

  return (
    <div className="bg-gray-light">
      <div className=" flex flex-col justify-center p-10 ">
        <div className="w-full p-6 m-auto max-w-xl bg-white shadow-md">
          <H4 styles="text-center">Sign in to your account</H4>
          <FormProvider {...methods}>
            {" "}
            <form className="mt-6" onSubmit={methods.handleSubmit(onSubmit)}>
              <LoginInput />
            </form>
          </FormProvider>

          <p className="mt-8 text-small  font-light text-center text-gray-dark">
            Don't have an account?
            <a href="#" className=" text-primary">
              Create one now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
