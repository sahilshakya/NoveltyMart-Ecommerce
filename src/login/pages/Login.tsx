import H4 from "../../shared/components/H4";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const dispatch = useDispatch();

  console.log(email, password);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div className="bg-gray-light">
      <div className=" flex flex-col justify-center p-10 ">
        <div className="w-full p-6 m-auto max-w-xl bg-white shadow-md">
          <H4 styles="text-center">Sign in to your account</H4>
          <form className="mt-6">
            <div className="mb-2">
              <label className=" text-small font-regularBold text-gray-dark">
                Email
              </label>
              <input
                value={email}
                type="email"
                className=" w-full px-4 py-2 mt-2  bg-gray-light"
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* {errors.email && (
                <span className="text-error">{errors.email.message}</span>
              )} */}
            </div>
            <div className="mb-2">
              <label className=" text-small font-regularBold text-gray-dark">
                Password
              </label>
              <input
                value={password}
                type="password"
                className=" w-full px-4 py-2 mt-2 bg-gray-light"
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* {errors.password && (
                <span className="text-error">{errors.password.message}</span>
              )} */}
            </div>

            <a href="#" className="text-small m-auto text-right">
              Forget Password?
            </a>
            <div className="mt-6">
              <button
                onClick={handleSubmit}
                className="w-full px-4 py-2 bg-primary text-white"
              >
                Sign In
              </button>
            </div>
          </form>

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
