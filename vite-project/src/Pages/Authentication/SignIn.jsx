import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FormInput } from "./FormInput";
export const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form className="space-y-6">
      <h1 className="text-2xl font-poppins font-bold text-white text-center mb-8">
        Welcome Back
      </h1>
      <FormInput
        label="Username or Roll Number"
        type="text"
        placeholder="Enter your username or roll number"
        id="username2"
        name="username2"
        required
      />
      <div className="relative">
        <FormInput
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          id="pass2"
          name="password2"
          required
        />
        <button
          type="button"
          className="absolute right-3 top-[38px] text-gray-400 hover:text-white"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
      <div className="flex items-center justify-between">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 rounded border-gray-600 text-yellow-400 focus:ring-yellow-400 focus:ring-offset-gray-800"
          />
          <span className="text-sm text-gray-300">Remember me</span>
        </label>
        <button
          type="button"
          className="text-sm text-yellow-400 hover:text-yellow-300 font-montserrat"
        >
          Forgot Password?
        </button>
      </div>
      <button
        type="submit"
        className="w-full bg-yellow-400 text-gray-900 py-3 rounded-md font-montserrat font-semibold hover:bg-yellow-300 transition-colors"
      >
        Sign In
      </button>
    </form>
  );
};
