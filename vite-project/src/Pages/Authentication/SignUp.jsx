import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FormInput } from "./FormInput";
import { PasswordStrength } from "./PasswordStrength";
export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  return (
    <form className="space-y-6">
      <h1 className="text-2xl font-poppins font-bold text-white text-center mb-8">
        Create Account
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <FormInput label="First Name" type="text" placeholder="John" required />
        <FormInput label="Last Name" type="text" placeholder="Doe" required />
      </div>
      <FormInput
        label="Username"
        type="text"
        placeholder="Choose a username"
        required
      />
      <FormInput
        label="College Roll Number"
        type="text"
        placeholder="Enter your roll number"
        required
      />
      <div className="relative">
        <FormInput
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="Choose a strong password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
      <PasswordStrength password={password} />
      <FormInput
        label="Confirm Password"
        type={showPassword ? "text" : "password"}
        placeholder="Confirm your password"
        required
      />
      <button
        type="submit"
        className="w-full bg-yellow-400 text-gray-900 py-3 rounded-md font-montserrat font-semibold hover:bg-yellow-300 transition-colors"
      >
        Create Account
      </button>
    </form>
  );
};
