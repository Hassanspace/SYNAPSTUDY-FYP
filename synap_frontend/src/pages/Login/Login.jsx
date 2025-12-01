import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import synapstudy from "../../assets/SynapStudy.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // new state
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true); // start loading

    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save tokens
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);

        // Save user info
        localStorage.setItem(
          "user",
          JSON.stringify({
            email: data.email,
            username: data.username,
            role: data.role,
            profile_completed: data.profile_completed || false, // add profile_completed
          })
        );

        // Redirect based on profile completion
        setTimeout(() => {
          if (data.profile_completed) {
            navigate("/dashboard");
          } else {
            navigate("/profile-setup"); // redirect to profile setup page
          }
        }, 300); // slight delay to show loader
      } else {
        setError(data.detail || "Invalid credentials");
        setLoading(false); // stop loader on error
      }
    } catch (err) {
      setError("Server error. Try again later.");
      setLoading(false); // stop loader on error
    }
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <header className="w-full py-5 flex justify-center border-b-4">
        <h1 className="font-bold text-3xl text-black">SynapStudy</h1>
      </header>

      <div className="flex justify-center items-center flex-1 px-6">
        <div className="bg-white/20 backdrop-blur-xl border border-gray-300/40 shadow-xl w-full max-w-lg rounded-2xl p-10">
          <h1 className="text-4xl font-bold text-black text-center mb-3">
            Welcome Back
          </h1>

          <p className="text-center text-gray-700 mb-8">
            Sign in to your smart learning hub
          </p>

          {error && (
            <p className="text-red-600 text-sm text-center -mt-3 mb-3">
              {error}
            </p>
          )}

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 rounded-xl bg-white/60 text-black placeholder-gray-600 border border-gray-400 focus:ring-2 focus:ring-[#4CFF83] outline-none"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3 rounded-xl bg-white/60 text-black placeholder-gray-600 border border-gray-400 focus:ring-2 focus:ring-[#4CFF83] outline-none"
              required
            />

            <button
              type="submit"
              disabled={loading} // disable button while loading
              className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#4CFF83] via-[#3AC2FF] to-[#6A4CFF] hover:opacity-90 transition shadow-lg flex justify-center items-center gap-2"
            >
              {loading && (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              )}
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-center mt-8 text-gray-700">
            Don’t have an account?{" "}
            <Link to="/signup" className="font-bold text-black underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
