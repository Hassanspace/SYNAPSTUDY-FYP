import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    password2: "",
    role: "student",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // toggle state
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Account created successfully!");
        navigate("/login");
      } else {
        const errorMsg =
          data?.password || data?.email || data?.username || data?.detail || "Signup failed.";
        setError(Array.isArray(errorMsg) ? errorMsg.join(", ") : errorMsg);
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="w-full py-5 flex justify-center border-b-4">
        <h1 className="font-bold text-3xl text-black">SynapStudy</h1>
      </header>

      {/* Signup Card */}
      <div className="flex justify-center items-center flex-1 px-6 py-3">
        <div className="bg-white/20 backdrop-blur-xl border border-gray-300/40 shadow-xl w-full max-w-lg rounded-2xl p-10">
          <h1 className="text-4xl font-bold text-black text-center mb-3">
            Create Account
          </h1>

          <p className="text-center text-gray-700 mb-8">
            Join your smart learning hub
          </p>

          {error && (
            <p className="text-red-600 text-sm text-center -mt-3 mb-3">{error}</p>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-xl bg-white/60 text-black placeholder-gray-600 border border-gray-400 focus:ring-2 focus:ring-[#4CFF83] outline-none"
              required
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-xl bg-white/60 text-black placeholder-gray-600 border border-gray-400 focus:ring-2 focus:ring-[#4CFF83] outline-none"
              required
            />

            {/* Password Field */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-xl bg-white/60 text-black placeholder-gray-600 border border-gray-400 focus:ring-2 focus:ring-[#4CFF83] outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* Confirm Password Field */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password2"
                placeholder="Confirm Password"
                value={formData.password2}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-xl bg-white/60 text-black placeholder-gray-600 border border-gray-400 focus:ring-2 focus:ring-[#4CFF83] outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-xl bg-white/60 text-black placeholder-gray-600 border border-gray-400 focus:ring-2 focus:ring-[#4CFF83] outline-none"
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>

            {/* Gradient Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#4CFF83] via-[#3AC2FF] to-[#6A4CFF] hover:opacity-90 transition shadow-lg"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center mt-8 text-gray-700">
            Already have an account?{" "}
            <Link to="/login" className="font-bold text-black underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
