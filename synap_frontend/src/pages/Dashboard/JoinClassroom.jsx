import React, { useState } from "react";

const JoinClassroom = () => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("info");

  const handleJoin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const token = localStorage.getItem("access");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/classrooms/join/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ join_code: code }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("🎉 Joined classroom successfully!");
        setMessageType("success");
        setCode("");
      } else {
        setMessage(data.error || "Invalid code. Try again.");
        setMessageType("error");
      }
    } catch (err) {
      setMessage("Server error. Try again.");
      setMessageType("error");
    }

    setLoading(false);
  };

  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center px-6 py-14">
      <div className="bg-white/20 backdrop-blur-xl border border-gray-300/40 shadow-xl rounded-2xl p-8 w-full max-w-lg">
        
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black mb-4">
          Join Classroom
        </h1>
        <p className="text-center text-gray-700 mb-6">
          Enter the classroom join code shared by your teacher.
        </p>

        <form onSubmit={handleJoin} className="flex flex-col gap-4">
          <label className="text-sm font-semibold text-gray-800">Join Code</label>
          <input
            type="text"
            value={code}
            placeholder="e.g. ABC123"
            onChange={(e) => setCode(e.target.value)}
            className="w-full px-5 py-3 rounded-xl bg-white/60 text-black placeholder-gray-600 border border-gray-400 focus:ring-2 focus:ring-[#4CFF83] outline-none"
            required
          />

          {message && (
            <p
              className={`text-center text-sm font-medium ${
                messageType === "success"
                  ? "text-green-600"
                  : messageType === "error"
                  ? "text-red-600"
                  : "text-gray-700"
              }`}
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#4CFF83] via-[#3AC2FF] to-[#6A4CFF] hover:opacity-90 transition shadow-lg"
          >
            {loading ? "Joining..." : "Join Classroom"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinClassroom;
