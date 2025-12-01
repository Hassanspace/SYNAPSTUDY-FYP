import React, { useEffect, useState } from "react";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/auth/profile/", {
      headers: { Authorization: `Bearer ${localStorage.getItem("access")}` },
    })
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.error("Failed to fetch profile:", err));
  }, []);

  return (
    <div className="w-1/4 bg-gray-100 p-6 rounded-2xl shadow flex flex-col justify-between h-full">
      {/* Top Buttons */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-black">Dashboard</h2>
        {["classrooms", "notifications", "chatbot"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-full py-2 px-4 rounded-xl text-left font-semibold mb-2 ${
              activeTab === tab
                ? "bg-gradient-to-r from-[#4CFF83] via-[#3AC2FF] to-[#6A4CFF] text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Bottom Profile Card */}
      {profile && (
        <div className="mt-6 bg-white/20 backdrop-blur-xl border border-gray-300/40 rounded-2xl p-4 flex items-center gap-4 shadow-lg">
          {/* Profile Image */}
          {profile.profile_image ? (
            <img
              src={`http://127.0.0.1:8000${profile.profile_image}`}
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-semibold">
              N/A
            </div>
          )}

          {/* Name and Role */}
          <div className="flex flex-col">
            <span className="font-semibold text-black text-sm">
              {profile.first_name} {profile.last_name}
            </span>
            <span className="text-gray-600 text-xs">{profile.role}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
