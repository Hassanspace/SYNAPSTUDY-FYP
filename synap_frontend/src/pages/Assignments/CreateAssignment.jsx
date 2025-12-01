import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CreateAssignment = () => {
  const { id } = useParams(); // ✅ classroom ID from URL
  const navigate = useNavigate();
  const token = localStorage.getItem("access");

  const [assignment, setAssignment] = useState({
    title: "",
    description: "",
    deadline: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") setAssignment({ ...assignment, file: files[0] });
    else setAssignment({ ...assignment, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", assignment.title);
    formData.append("description", assignment.description);
    formData.append("deadline", assignment.deadline);
    if (assignment.file) formData.append("file", assignment.file);
    formData.append("classroom_id", id); // ✅ classroom ID

    const res = await fetch("http://127.0.0.1:8000/api/assignments/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (res.ok) navigate(`/classroom/${id}`);
    else console.error(await res.json());
  };

  return (
    <form
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl font-bold">Create Assignment</h1>
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
        required
        className="p-2 border rounded"
      />
      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
        className="p-2 border rounded"
      />
      <input
        type="datetime-local"
        name="deadline"
        onChange={handleChange}
        required
        className="p-2 border rounded"
      />
      <input
        type="file"
        name="file"
        onChange={handleChange}
        className="p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Upload Assignment
      </button>
    </form>
  );
};

export default CreateAssignment;
