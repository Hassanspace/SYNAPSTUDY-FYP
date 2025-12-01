import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const AssignmentDetail = () => {
  const { assignmentId } = useParams();
  const token = localStorage.getItem("access");
  const [assignment, setAssignment] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/assignments/${assignmentId}/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then(setAssignment);
  }, [assignmentId, token]);

  if (!assignment) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-10">
      <h1 className="text-3xl font-bold mb-4">{assignment.title}</h1>
      <p className="text-gray-700 mb-2">{assignment.description}</p>
      <p className="text-gray-500 mb-4">Deadline: {new Date(assignment.deadline).toLocaleString()}</p>
      {assignment.file && (
        <div className="mb-4">
          <a href={`http://127.0.0.1:8000${assignment.file}`} target="_blank" className="text-blue-600 underline">
            Preview File
          </a>
        </div>
      )}
      <Link
        to={`/classroom/${assignment.classroom}/assignment/${assignment.id}/discussion`}
        className="px-4 py-2 bg-gradient-to-r from-[#4CFF83] via-[#3AC2FF] to-[#6A4CFF] text-white rounded-xl font-semibold"
      >
        Go to Discussion
      </Link>
    </div>
  );
};

export default AssignmentDetail;
