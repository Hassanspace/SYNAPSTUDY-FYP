import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // ✅ Store tokens
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);

        // ✅ Optionally store user info (for navbar)
        localStorage.setItem(
          "user",
          JSON.stringify({ email: email })
        );

        alert("Login successful!");

        // ✅ Refresh the page so Navbar updates instantly
        window.location.href = "/";
      } else {
        setError(data.detail || "Invalid credentials");
      }
    } catch (err) {
      setError("Server error. Try again later.");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-200 flex flex-col items-center">
      <h1 className="text-3xl mt-8 font-semibold">Login to Your Account</h1>
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded-lg p-8 mt-8 w-96 flex flex-col gap-4"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input input-bordered w-full"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="bg-[#075E54] text-white h-12 rounded-lg mt-2 hover:bg-[#0a6d60] transition"
        >
          LOGIN YOUR ACCOUNT
        </button>
      </form>
      <p className="mt-4">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-green-500 font-bold">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
