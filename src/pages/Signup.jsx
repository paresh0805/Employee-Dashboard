import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [signupMethod, setSignupMethod] = useState("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [department, setDepartment] = useState(""); // For placeholder
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log({ signupMethod, email, phone, password, department });
    // Add your signup logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Card */}
      <div className="flex flex-col md:flex-row w-full max-w-3xl bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Left side - Logo */}
        <div className="md:w-1/2 w-full bg-blue-900 flex items-center justify-center p-4 md:p-6">
          <img
            src="/assets/black.png"
            alt="Logo"
            className="w-24 h-24 md:w-60 md:h-60 object-contain"
          />
        </div>

        {/* Right side - Signup form */}
        <div className="md:w-1/2 w-full p-4 md:p-6 flex flex-col justify-center">
          <h1 className="text-xl md:text-2xl font-bold mb-2 text-gray-900 text-center">
            Create an account
          </h1>
          <p className="text-gray-500 mb-4 md:mb-6 text-sm md:text-base text-center">
            Sign up to get started
          </p>

          {/* Toggle */}
          <div className="flex border border-green-500 rounded-full mb-4 overflow-hidden">
            <button
              type="button"
              onClick={() => setSignupMethod("email")}
              className={`w-1/2 py-1 rounded-full transition ${
                signupMethod === "email"
                  ? "bg-blue-900 text-white"
                  : "bg-white text-gray-500"
              }`}
            >
              Email
            </button>
            <button
              type="button"
              onClick={() => setSignupMethod("phone")}
              className={`w-1/2 py-1 rounded-full transition ${
                signupMethod === "phone"
                  ? "bg-blue-900 text-white"
                  : "bg-white text-gray-500"
              }`}
            >
              Phone Number
            </button>
          </div>

          <form onSubmit={handleSignup} className="space-y-3">
            {/* Email or Phone Input */}
            {signupMethod === "email" ? (
              <div>
                <label className="block text-gray-700 mb-1 text-sm">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-green-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
                  placeholder="Enter your email"
                  required
                />
              </div>
            ) : (
              <div>
                <label className="block text-gray-700 mb-1 text-sm">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-green-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
                  placeholder="+91 9876543210"
                  required
                />
              </div>
            )}

            {/* Password */}
            <div>
              <label className="block text-gray-700 mb-1 text-sm">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-green-500 rounded-md p-2 pr-12 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-green-500 text-xs font-medium"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-700 mb-1 text-sm">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full border border-green-500 rounded-md p-2 pr-12 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
                  placeholder="Confirm your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-green-500 text-xs font-medium"
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Department */}
            <div>
              <label className="block text-gray-700 mb-1 text-sm">Department</label>
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full border border-green-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
                required
              >
                <option value="" disabled>
                  Select your department
                </option>
                <option value="Water">Water</option>
                <option value="Electricity">Electricity</option>
                <option value="Sewage">Sewage</option>
                <option value="Garbage">Garbage</option>
              </select>
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition text-sm"
            >
              Sign Up
            </button>

            {/* Already have an account */}
            <p className="text-gray-500 text-center mt-1 text-xs">
              Already have an account?{" "}
              <span
                className="text-blue-900 cursor-pointer hover:underline"
                onClick={() => navigate("/")}
              >
                Login
              </span>
            </p>

            {/* Or sign up with */}
            <div className="flex items-center my-2">
              <hr className="flex-grow border-gray-300" />
              <span className="px-2 text-gray-500 text-xs">Or sign up with</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* Social Buttons */}
            <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 text-sm">
              <button className="flex-1 border border-green-500 rounded-md py-1 flex items-center justify-center hover:bg-gray-100 transition">
                <img src="/assets/google.png" alt="Google" className="w-4 h-4 mr-1" />
                Google
              </button>
              <button className="flex-1 border border-green-500 rounded-md py-1 flex items-center justify-center hover:bg-gray-100 transition">
                <img src="/assets/facebook.png" alt="Facebook" className="w-4 h-4 mr-1" />
                Facebook
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
