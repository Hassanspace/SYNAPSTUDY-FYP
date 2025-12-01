import React, { useState, useEffect } from "react";

const AssignmentCard = ({ assignment }) => {
  const token = localStorage.getItem("access");
  const [discussions, setDiscussions] = useState([]);
  const [message, setMessage] = useState("");
  const [showDiscussion, setShowDiscussion] = useState(false);

  const fetchDiscussions = async () => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8000/api/assignments/${assignment.id}/discussion/`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const data = await res.json();
      setDiscussions(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSend = async () => {
    if (!message.trim()) return;
    try {
      const res = await fetch(
        `http://127.0.0.1:8000/api/assignments/${assignment.id}/discussion/`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        }
      );
      if (res.ok) {
        setMessage("");
        fetchDiscussions();
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (showDiscussion) fetchDiscussions();
  }, [showDiscussion]);

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between hover:shadow-2xl transition">
      <div>
        <h3 className="text-black font-bold text-2xl mb-2">{assignment.title}</h3>
        <p className="text-gray-700 mb-2">{assignment.description}</p>
        <p className="text-gray-500 mb-2">
          Deadline: {new Date(assignment.deadline).toLocaleString()}
        </p>
        <p className="text-gray-500 mb-2">By: {assignment.teacher_name}</p>
      </div>

      <div>
        {assignment.file && (
          <a
            href={assignment.file}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            View File
          </a>
        )}
        <button
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => setShowDiscussion(!showDiscussion)}
        >
          {showDiscussion ? "Hide Discussions" : "Show Discussions"}
        </button>

        {showDiscussion && (
          <div className="mt-4 bg-gray-100 rounded-xl p-4 space-y-3">
            {discussions.map((d) => (
              <div key={d.id} className="bg-white p-3 rounded-xl shadow">
                <strong>{d.user}</strong>: {d.message}
              </div>
            ))}
            <div className="flex gap-2 mt-2">
              <input
                type="text"
                placeholder="Write a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 px-3 py-2 border rounded-xl"
              />
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
                onClick={handleSend}
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssignmentCard;
