import React from "react";
import { Link } from "react-router-dom";

const ClassroomsTab = ({ classrooms, user, copiedStates, setCopiedStates }) => {
  const handleCopyCode = (clsId, code) => {
    navigator.clipboard.writeText(code);
    setCopiedStates((prev) => ({ ...prev, [clsId]: { ...prev[clsId], code: true } }));
    setTimeout(() => setCopiedStates((prev) => ({ ...prev, [clsId]: { ...prev[clsId], code: false } })), 1000);
  };

  const handleCopyLink = (clsId, link) => {
    navigator.clipboard.writeText(link);
    setCopiedStates((prev) => ({ ...prev, [clsId]: { ...prev[clsId], link: true } }));
    setTimeout(() => setCopiedStates((prev) => ({ ...prev, [clsId]: { ...prev[clsId], link: false } })), 1000);
  };

  return (
    <div>
      {/* Header with action button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-black">My Classrooms</h1>
        {user?.role && (
          <Link
            to={user.role === "teacher" ? "/classroom/create" : "/classroom/join"}
            className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#4CFF83] via-[#3AC2FF] to-[#6A4CFF] hover:opacity-90 transition shadow-lg"
          >
            {user.role === "teacher" ? "Create Classroom" : "Join Classroom"}
          </Link>
        )}
      </div>

      {/* Classrooms list */}
      {classrooms.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {classrooms.map((cls) => {
            const copiedCode = copiedStates[cls.id]?.code || false;
            const copiedLink = copiedStates[cls.id]?.link || false;

            return (
              <div key={cls.id} className="p-6 bg-white/50 backdrop-blur-md border border-gray-300/30 rounded-2xl shadow flex flex-col gap-3">
                <h2 className="text-2xl font-bold text-black">{cls.name}</h2>
                <p className="text-gray-700">{cls.description}</p>

                {/* Teacher: show code and link */}
                {user?.role === "teacher" && cls.join_code && cls.join_link && (
                  <div className="bg-gray-100 p-3 rounded-xl border border-gray-200 flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">Class Code:</span>
                      <span className="text-gray-900">{cls.join_code}</span>
                      <button
                        className="px-2 py-1 bg-blue-600 text-white rounded"
                        onClick={() => handleCopyCode(cls.id, cls.join_code)}
                      >
                        {copiedCode ? "Copied!" : "Copy"}
                      </button>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">Join Link:</span>
                      <span className="text-gray-900 truncate max-w-xs">{cls.join_link}</span>
                      <button
                        className="px-2 py-1 bg-blue-600 text-white rounded"
                        onClick={() => handleCopyLink(cls.id, cls.join_link)}
                      >
                        {copiedLink ? "Copied!" : "Copy"}
                      </button>
                    </div>
                  </div>
                )}

                <Link
                  to={`/classroom/${cls.id}`}
                  className="mt-2 px-4 py-2 bg-gradient-to-r from-[#4CFF83] via-[#3AC2FF] to-[#6A4CFF] text-white rounded-xl text-center shadow hover:opacity-90 transition"
                >
                  Open Classroom
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-700">No classrooms joined yet.</p>
      )}
    </div>
  );
};

export default ClassroomsTab;
