import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Home/Navbar";

const Dashboard = () => {
  const [classrooms, setClassrooms] = useState([]);
  const [showCreate, setShowCreate] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const fetchWithToken = async (url, options = {}) => {
    const access = localStorage.getItem("access");

    let res = await fetch(url, {
      ...options,
      headers: { Authorization: `Bearer ${access}`, ...(options.headers || {}) },
    });

    // handle 401 (token expired)
    if (res.status === 401) {
      const refresh = localStorage.getItem("refresh");
      if (!refresh) {
        navigate("/login");
        return null;
      }

      const refreshRes = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh }),
      });
      if (!refreshRes.ok) {
        navigate("/login");
        return null;
      }

      const refreshData = await refreshRes.json();
      localStorage.setItem("access", refreshData.access);

      // retry original request
      res = await fetch(url, {
        ...options,
        headers: { Authorization: `Bearer ${refreshData.access}`, ...(options.headers || {}) },
      });
    }

    return res;
  };

  const loadClassrooms = async () => {
    try {
      const res = await fetchWithToken("http://127.0.0.1:8000/api/classrooms/classrooms/");
      if (!res) return; // redirected to login
      if (!res.ok) throw new Error("Failed to fetch classrooms");

      const data = await res.json();
      setClassrooms(data);
    } catch (err) {
      console.error("Error fetching classrooms:", err);
    }
  };

  useEffect(() => {
    loadClassrooms();
    const interval = setInterval(loadClassrooms, 60000); // refresh every minute
    return () => clearInterval(interval);
  }, []);

  const handleClassroomCreated = (newClassroom) => {
    setClassrooms((prev) => [newClassroom, ...prev]);
    navigate("/dashboard"); // back to dashboard after creation
  };

  return (
    <>
      <Navbar />

      <div className="w-full min-h-screen bg-white mt-20 px-6 py-20 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-black text-center mb-6">
          Welcome, {user.username}
        </h1>

        {user.role === "teacher" && (
          <Link
            to="/classroom/create"
            className="px-6 py-3 mb-6 rounded-xl font-semibold text-white bg-gradient-to-r from-[#4CFF83] via-[#3AC2FF] to-[#6A4CFF] hover:opacity-90 transition shadow-lg"
          >
            Create Classroom
          </Link>
        )}

        {user.role === "student" && (
          <Link
            to="/classroom/join"
            className="px-6 py-3 mb-6 rounded-xl font-semibold text-white bg-gradient-to-r from-[#4CFF83] via-[#3AC2FF] to-[#6A4CFF] hover:opacity-90 transition shadow-lg"
          >
            Join Classroom
          </Link>
        )}

        {/* Classroom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full mt-6">
          {classrooms.length ? (
            classrooms.map((cls) => (
              <div
                key={cls.id}
                className="p-6 bg-white/50 backdrop-blur-md border border-gray-300/30 rounded-2xl shadow hover:shadow-xl transition flex flex-col gap-3"
              >
                <h2 className="text-2xl font-bold text-black">{cls.name}</h2>
                <p className="text-gray-700">{cls.description}</p>

                {user.role === "teacher" && cls.join_code && cls.join_link && (
                  <div className="mt-3 text-sm">
                    <p className="text-black font-semibold">Join Code: {cls.join_code}</p>
                    <p className="text-blue-600 break-all">Share Link: {cls.join_link}</p>
                  </div>
                )}

                <Link
                  to={`/classroom/${cls.id}`}
                  className="mt-2 px-4 py-2 bg-gradient-to-r from-[#4CFF83] via-[#3AC2FF] to-[#6A4CFF] text-white rounded-xl text-center shadow hover:opacity-90 transition"
                >
                  Open Classroom
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-700 col-span-full">
              No classrooms yet.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
