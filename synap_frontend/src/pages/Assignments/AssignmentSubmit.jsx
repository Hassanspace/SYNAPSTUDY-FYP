import React, { useState } from "react";

const AssignmentSubmit = ({ assignmentId }) => {
  const [file, setFile] = useState(null);
  const token = localStorage.getItem("access");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(`http://127.0.0.1:8000/api/assignments/${assignmentId}/submit/`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });

    if (res.ok) alert("Assignment submitted!");
    else console.error(await res.json());
  };

  return (
    <form className="flex gap-2 mt-2" onSubmit={handleSubmit}>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} className="border p-1 rounded flex-1"/>
      <button type="submit" className="bg-green-600 text-white px-3 rounded hover:bg-green-700">
        Submit
      </button>
    </form>
  );
};

export default AssignmentSubmit;
