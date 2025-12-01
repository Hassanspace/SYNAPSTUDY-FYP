import React from "react";

const Tabs = ({ activeTab, setActiveTab, user }) => {
  const tabs = ["assignments", "quizzes"];

  if (user.role === "student") tabs.push("shelves");
  if (user.role === "teacher") tabs.push("students");

  return (
    <div className="flex justify-center gap-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-5 py-2 rounded-xl font-semibold transition ${
            activeTab === tab
              ? "bg-gradient-to-r from-[#4CFF83] via-[#3AC2FF] to-[#6A4CFF] text-white"
              : "bg-white border border-gray-300 text-black hover:shadow"
          }`}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
