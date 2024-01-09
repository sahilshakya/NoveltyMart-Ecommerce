import { useState } from "react";
import Button from "../../shared/components/Button";
import Input from "../../shared/components/Input";
import H4 from "../../shared/components/H4";

const ForgotPassword = () => {
  const [changePassword, setChangePassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="bg-gray-light">
      <div className=" flex flex-col justify-center p-10 ">
        <div className="w-full p-6 m-auto max-w-xl bg-white shadow-md">
          <H4 styles="text-center">Sign in to your account</H4>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label className=" text-small font-regularBold text-gray-dark">
                Password
              </label>
              <Input
                type="password"
                className=" w-full px-4 py-2 mt-2 bg-gray-light"
                value={changePassword}
                onChange={(e) => setChangePassword(e.target.value)}
              />
            </div>

            <div className="mt-6">
              <Button className="w-full px-4 py-2 bg-primary text-white">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
