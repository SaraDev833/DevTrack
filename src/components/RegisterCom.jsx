import React from "react";
import { useForm } from "react-hook-form";
import { Sparkles, User, Building2, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const RegisterCom = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full p-6">
      {/* Mobile Logo + Sign In */}
      <div className="flex items-center justify-between gap-4 mb-8">
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
          Already have an account?{" "}
          <Link
            to="/signin"
            className="font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Sign in
          </Link>
        </p>
      </div>

      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-950">
          Create your account
        </h2>

        <p className="mt-3 text-sm md:text-base text-slate-500">
          Set up your workspace and get started in minutes.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-semibold text-slate-800 mb-2">
            Full name
          </label>

          <div className="relative">
            <User
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              {...register("name", {
                required: "Name is required",
              })}
            />
          </div>

          {errors.name && (
            <p className="mt-2 text-sm text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Workspace Name */}
        <div>
          <label className="block text-sm font-semibold text-slate-800 mb-2">
            Workspace name
          </label>

          <div className="relative">
            <Building2
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Enter your workspace name"
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              {...register("workspace", {
                required: "Workspace name is required",
              })}
            />
          </div>

          {errors.workspace && (
            <p className="mt-2 text-sm text-red-500">
              {errors.workspace.message}
            </p>
          )}
        </div>

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
              placeholder="Create a password"
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

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-semibold text-slate-800 mb-2">
            Confirm password
          </label>

          <div className="relative">
            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
          </div>

          {errors.confirmPassword && (
            <p className="mt-2 text-sm text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Terms */}
        <label className="flex items-start gap-3 text-sm text-slate-600 cursor-pointer">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-slate-300 accent-indigo-600"
            {...register("terms", {
              required: "You must agree to the terms and privacy policy",
            })}
          />

          <span>
            I agree to the{" "}
            <span className="font-semibold text-indigo-600">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="font-semibold text-indigo-600">
              Privacy Policy
            </span>
          </span>
        </label>

        {errors.terms && (
          <p className="text-sm text-red-500">{errors.terms.message}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 active:scale-[0.99]"
        >
          Create account
        </button>
      </form>
    </div>
  );
};

export default RegisterCom;