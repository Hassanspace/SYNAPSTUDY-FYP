import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchWithToken } from "../utils/auth";

const CreateClassroom = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetchWithToken(
        "http://127.0.0.1:8000/api/classrooms/create/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, description }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        // keep loading true so button shows "Creating..." until navigation
        setTimeout(() => navigate("/dashboard"), 500); // slight delay to show loading
      } else {
        setMessage(data.error || data.detail || "Something went wrong.");
        setLoading(false); // stop loading only on error
      }
    } catch (error) {
      setMessage("Server error. Try again.");
      setLoading(false); // stop loading only on error
    }
  };

  return (
    <div className="w-full min-h-screen bg-white/10 backdrop-blur-md flex items-center justify-center px-6 py-14">
      <div className="bg-white/20 backdrop-blur-xl border border-gray-300/40 shadow-xl rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black mb-6">
          Create a Classroom
        </h1>
        <form onSubmit={handleCreate} className="flex flex-col gap-4">
          <label className="text-sm font-semibold text-gray-800">
            Classroom Name
          </label>
          <input
            type="text"
            value={name}
            placeholder="Enter classroom name"
            onChange={(e) => setName(e.target.value)}
            className="w-full px-5 py-3 rounded-xl bg-white/60 text-black border border-gray-400 focus:ring-2 focus:ring-[#4CFF83] outline-none"
            required
          />

          <label className="text-sm font-semibold text-gray-800">
            Description (optional)
          </label>
          <textarea
            value={description}
            placeholder="Enter description"
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full px-5 py-3 rounded-xl bg-white/60 text-black border border-gray-400 focus:ring-2 focus:ring-[#4CFF83] outline-none resize-none"
          />

          {message && <p className="text-center text-red-600">{message}</p>}

          <button
            type="submit"
            disabled={loading}
            className="py-3 w-full bg-gradient-to-r from-[#4CFF83] via-[#3AC2FF] to-[#6A4CFF] text-white font-semibold rounded-xl shadow hover:opacity-90 transition"
          >
            {loading ? "Creating..." : "Create Classroom"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateClassroom;
