import React from "react";
import { useForm } from "react-hook-form";
import { Sparkles, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const LoginCom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full">
      {/* Mobile Logo + Sign Up */}
      <div className="flex items-center justify-between gap-4 mb-10">
        <div className="flex items-center gap-2 lg:hidden">
          <Sparkles
            className="text-indigo-600"
            size={24}
            fill="currentColor"
          />
          <p className="text-2xl font-bold text-slate-950">
            Plan<span className="text-indigo-600">nix</span>
          </p>
        </div>

        <p className="ml-auto text-sm text-slate-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Sign up
          </Link>
        </p>
      </div>

      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-950">
          Welcome back!
        </h2>

        <p className="mt-3 text-sm md:text-base text-slate-500">
          Sign in to continue to your Plannix workspace.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-slate-800 mb-2">
            Email address
          </label>

          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              {...register("email", {
                required: "Email address is required",
              })}
            />
          </div>

          {errors.email && (
            <p className="mt-2 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-semibold text-slate-800 mb-2">
            Password
          </label>

          <div className="relative">
            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
          </div>

          {errors.password && (
            <p className="mt-2 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between gap-4">
          <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-slate-300 accent-indigo-600"
            />
            Remember me
          </label>

          <Link
            to="/forgot-password"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Forgot password?
          </Link>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 active:scale-[0.99]"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default LoginCom;