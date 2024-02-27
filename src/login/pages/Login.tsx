import H4 from "../../shared/components/ui/H4";
import { ILoginRequest } from "../interfaces/loginRequest";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../LoginSchema";
import LoginInput from "../components/LoginInput";
import { LoginHandler } from "../utils";
import { useLoginHandler } from "../hooks/useLoginHandler";
import { toast } from "react-toastify";

const defaultValues = {
  email: "",
  password: "",
};

const Login: React.FC = () => {
  const { handleLoginSuccess } = useLoginHandler();

  const methods = useForm<ILoginRequest>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const onSubmit = async (data: ILoginRequest) => {
    try {
      const resp = await LoginHandler({ data });

      if (resp) {
        console.log(resp);
        handleLoginSuccess(resp);
      } else {
        toast.error("Incorrect Email/Password");
      }
      return resp;
    } catch (error) {
      console.log("login error", error);
    }
  };

  return (
    <div className="bg-gray-light h-screen">
      <div className=" flex flex-col justify-center p-10 ">
        <div className="w-full  p-6 m-auto max-w-xl bg-white shadow-md">
          <H4 styles="text-center">Sign in to your account</H4>
          <FormProvider {...methods}>
            <form className="mt-6" onSubmit={methods.handleSubmit(onSubmit)}>
              <LoginInput />
            </form>
          </FormProvider>

          <p className="mt-8  font-light text-center text-gray-dark">
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
