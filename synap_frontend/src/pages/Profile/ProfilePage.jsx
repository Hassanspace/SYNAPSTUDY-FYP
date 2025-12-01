import React, { useEffect, useState } from "react";
import Navbar from "../Home/Navbar";

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/auth/profile/", {
      headers: { Authorization: `Bearer ${localStorage.getItem("access")}` },
    })
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.error("Failed to fetch profile:", err));
  }, []);

  if (!profile)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p className="text-gray-600 text-xl">Loading profile...</p>
      </div>
    );

  return (
    <div className="w-full min-h-screen flex flex-col items-center py-10 px-4">
      
      {/* Your custom Navbar */}
      <Navbar/>

      {/* Profile Container */}
      <div className="w-full max-w-2xl mt-25 bg-white/20 backdrop-blur-xl border border-gray-300/40 rounded-3xl shadow-xl flex flex-col items-center p-10 gap-6 ">
        
        {/* Profile Image */}
        {profile.profile_image ? (
          <img
            src={`http://127.0.0.1:8000${profile.profile_image}`}
            alt="Profile"
            className="w-56 h-56 rounded-full object-cover border-4 border-white shadow-lg"
          />
        ) : (
          <div className="w-56 h-56 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-semibold">
            No Image
          </div>
        )}

        {/* Name */}
        <h2 className="text-4xl font-bold text-black">{profile.first_name} {profile.last_name}</h2>

        {/* Role & Email */}
        <div className="flex flex-col items-center gap-2 text-gray-700 text-lg">
          <p><span className="font-semibold text-black">Role:</span> {profile.role}</p>
          <p><span className="font-semibold text-black">Email:</span> {profile.email}</p>
        </div>

        {/* Description */}
        <div className="w-full text-center text-gray-700 text-lg mt-4">
          <h3 className="font-semibold text-black text-xl mb-2">About Me</h3>
          <p>{profile.description || "No description added yet."}</p>
        </div>

        {/* Edit Button */}
        <button
          onClick={() => window.location.href = "/profile/edit"}
          className="mt-6 w-48 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#4CFF83] via-[#3AC2FF] to-[#6A4CFF] hover:opacity-90 transition shadow-lg"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
