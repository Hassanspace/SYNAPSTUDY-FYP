import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Sidebar from "./Sidebar";
import ClassroomsTab from "./ClassroomsTab";
import NotificationsTab from "./NotificationsTab";
import ChatbotTab from "./ChatbotTab";

const Dashboard = () => {
  const [classrooms, setClassrooms] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [activeTab, setActiveTab] = useState("classrooms");
  const [copiedStates, setCopiedStates] = useState({});
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const fetchWithToken = async (url, options = {}) => {
    const access = localStorage.getItem("access");
    let res = await fetch(url, {
      ...options,
      headers: { Authorization: `Bearer ${access}`, ...(options.headers || {}) },
    });
    if (res.status === 401) {
      const refresh = localStorage.getItem("refresh");
      if (!refresh) return navigate("/login");
      const refreshRes = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh }),
      });
      if (!refreshRes.ok) return navigate("/login");
      const refreshData = await refreshRes.json();
      localStorage.setItem("access", refreshData.access);
      res = await fetch(url, {
        ...options,
        headers: { Authorization: `Bearer ${refreshData.access}`, ...(options.headers || {}) },
      });
    }
    return res;
  };

  useEffect(() => {
    const loadClassrooms = async () => {
      try {
        const res = await fetchWithToken("http://127.0.0.1:8000/api/classrooms/classrooms/");
        if (!res) return;
        if (!res.ok) throw new Error("Failed to fetch classrooms");
        setClassrooms(await res.json());
      } catch (err) {
        console.error(err);
      }
    };

    const loadNotifications = async () => {
      try {
        const res = await fetchWithToken("http://127.0.0.1:8000/api/notifications/");
        if (!res) return;
        if (!res.ok) throw new Error("Failed to fetch notifications");
        setNotifications(await res.json());
      } catch (err) {
        console.error(err);
      }
    };

    loadClassrooms();
    loadNotifications();
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-white mt-25 px-6 py-10 flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="w-3/4 ml-6">
          {activeTab === "classrooms" && (
            <ClassroomsTab
              classrooms={classrooms}
              user={user}
              copiedStates={copiedStates}
              setCopiedStates={setCopiedStates}
            />
          )}
          {activeTab === "notifications" && (
            <NotificationsTab notifications={notifications} user={user} />
          )}
          {activeTab === "chatbot" && <ChatbotTab />}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
