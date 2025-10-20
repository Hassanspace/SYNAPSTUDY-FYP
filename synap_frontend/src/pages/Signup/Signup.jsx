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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Account created successfully!");
        navigate("/login");
      } else {
        // Show more readable backend validation errors
        const errorMsg =
          data?.password || data?.email || data?.username || data?.detail || "Signup failed.";
        setError(Array.isArray(errorMsg) ? errorMsg.join(", ") : errorMsg);
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-200">
      <h1 className="text-3xl mt-8 font-semibold">Create an Account</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 mt-8 w-96 flex flex-col gap-4"
      >
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
          className="input input-bordered w-full"
          required
        />
        <input
          name="username"
          type="text"
          placeholder="Username"
          onChange={handleChange}
          value={formData.username}
          className="input input-bordered w-full"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password}
          className="input input-bordered w-full"
          required
        />
        <input
          name="password2"
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={formData.password2}
          className="input input-bordered w-full"
          required
        />
        <select
          name="role"
          onChange={handleChange}
          value={formData.role}
          className="input input-bordered w-full"
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="bg-[#075E54] text-white h-12 rounded-lg mt-2 hover:bg-[#064C45]"
        >
          Sign Up
        </button>
      </form>

      <p className="mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-green-600 font-bold hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
