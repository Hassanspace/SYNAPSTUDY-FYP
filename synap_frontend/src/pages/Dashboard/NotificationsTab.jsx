import React, { useState } from "react";
import { toast } from "react-toastify";

const NotificationsTab = ({ notifications, user }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return toast.error("Notification cannot be empty!");
    
    // Simulate sending notification (replace with API call)
    toast.success("Notification sent!");
    setMessage("");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-black">Notifications</h1>

      {user?.role === "teacher" && (
        <div className="mb-4">
          <textarea
            placeholder="Write a notification..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 border rounded-xl mb-2"
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-gradient-to-r from-[#4CFF83] via-[#3AC2FF] to-[#6A4CFF] text-white rounded-xl shadow hover:opacity-90 transition"
          >
            Send Notification
          </button>
        </div>
      )}

      {notifications.length ? (
        <div className="space-y-4">
          {notifications.map((n) => (
            <div key={n.id} className="bg-white p-4 rounded-xl shadow border">
              <p className="text-gray-800">{n.message}</p>
              <p className="text-gray-500 text-sm">{n.sender}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-700">
          {user?.role === "teacher"
            ? "No notifications sent yet."
            : "No notifications received yet."}
        </p>
      )}
    </div>
  );
};

export default NotificationsTab;
