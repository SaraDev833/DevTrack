import React from "react";
import LoginImage from "../assets/Login.png";
import Google from "../components/Google";
import LoginCom from "../components/LoginCom";

const Login = () => {
  return (
    <div className="min-h-screen w-full bg-slate-100 flex items-center justify-center p-4 md:p-6">
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">

        {/* Left Image Section */}
        <div className="hidden lg:block h-[760px] bg-slate-900">
          <img
            src={LoginImage}
            alt="Plannix workspace preview"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Right Form Section */}
        <div className="min-h-[620px] flex items-center justify-center px-6 py-10 sm:px-10 lg:px-14">
          <div className="w-full max-w-md">
            <LoginCom />

            <div className="mt-6">
              <Google />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;