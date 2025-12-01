import React, { useEffect, useState } from "react";

const AssignmentDiscussion = ({ assignmentId }) => {
  const [discussions, setDiscussions] = useState([]);
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("access");

  const fetchDiscussions = () => {
    fetch(`http://127.0.0.1:8000/api/assignments/${assignmentId}/discussion/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then(setDiscussions)
      .catch(console.error);
  };

  useEffect(() => {
    fetchDiscussions();
  }, [assignmentId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;

    const res = await fetch(`http://127.0.0.1:8000/api/assignments/${assignmentId}/discussion/`, {
      method: "POST",
      headers: { 
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message }),
    });

    if (res.ok) {
      setMessage("");
      fetchDiscussions();
    } else console.error(await res.json());
  };

  return (
    <div className="mt-4 bg-gray-100 p-3 rounded flex flex-col gap-2 max-h-64 overflow-y-auto">
      {discussions.map((d) => (
        <div key={d.id} className="bg-white p-2 rounded shadow">
          <strong>{d.user}</strong>: {d.message}
        </div>
      ))}

      <form className="flex gap-2 mt-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write a comment..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 border p-1 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-3 rounded hover:bg-blue-700">
          Send
        </button>
      </form>
    </div>
  );
};

export default AssignmentDiscussion;
