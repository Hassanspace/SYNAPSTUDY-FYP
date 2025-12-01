import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileSetup = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    first_name: "",
    last_name: "",
    description: "",
    profile_image: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profile_image") {
      setProfile({ ...profile, profile_image: files[0] });
    } else {
      setProfile({ ...profile, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData();
    for (let key in profile) formData.append(key, profile[key]);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/auth/profile/", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
        body: formData,
      });

      if (res.ok) {
        navigate("/dashboard");
      } else {
        const data = await res.json();
        setError(data.detail || "Failed to update profile");
      }
    } catch (err) {
      setError("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col">
      <header className="w-full py-8 flex justify-center border-b-4 border-gray-200">
        <h1 className="text-3xl font-bold text-black">SynapStudy</h1>
      </header>

      <div className="flex justify-center items-center flex-1 px-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-10 bg-white/20 backdrop-blur-xl border border-gray-300/40 shadow-xl rounded-2xl flex flex-col gap-6"
        >
          <h1 className="text-4xl font-bold text-black text-center mb-4">
            Setup Your Profile
          </h1>

          {error && <p className="text-red-600 text-center">{error}</p>}

          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/60 text-black placeholder-gray-600 border border-gray-400 focus:ring-2 focus:ring-[#4CFF83] outline-none"
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/60 text-black placeholder-gray-600 border border-gray-400 focus:ring-2 focus:ring-[#4CFF83] outline-none"
          />
          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/60 text-black placeholder-gray-600 border border-gray-400 focus:ring-2 focus:ring-[#4CFF83] outline-none resize-none h-24"
          />
          <input
            type="file"
            name="profile_image"
            onChange={handleChange}
            className="w-full text-black px-4 py-3 rounded-xl bg-white/60 border border-gray-400 focus:ring-2 focus:ring-[#4CFF83] outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#4CFF83] via-[#3AC2FF] to-[#6A4CFF] hover:opacity-90 transition shadow-lg flex justify-center items-center gap-2"
          >
            {loading && (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            )}
            {loading ? "Saving..." : "Save & Continue"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSetup;
