import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FormInput } from "./FormInput";
import { FormDropDown } from "./FormDropDown";
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
        <FormInput label="First Name" type="text" placeholder="John" id="first1" name="firstName" required autocomplete="true" />
        <FormInput label="Last Name" type="text" placeholder="Doe" id="last1" name="lastName" required autocomplete="true" />
      </div>
      <FormInput
        label="Username"
        type="text"
        placeholder="Choose a username"
        id="username1"
        name="username"
        autocomplete="true"
        required
      />
      <FormInput
        label="College Roll Number"
        type="text"
        placeholder="Enter your roll number"
        id="rollnumber1"
        name="rollnumber"
        autocomplete="true"
        required
      />
      <FormDropDown
       label="Select Your Role"
       options={["Student", "Club Lead"]}
       type="dropbox"
       placeholder="Select"
       id="selectRoll"
       name="selectRoll"
      />
      <div className="relative">
        <FormInput
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="Choose a strong password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password1"
          name="password"
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
        id="confirmPass"
        name="confirmpassword"
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
