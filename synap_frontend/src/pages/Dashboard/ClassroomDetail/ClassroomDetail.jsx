import React, { useEffect, useState } from "react";
import AssignmentList from "../../Assignments/AssignmentList";
import CreateAssignment from "../../Assignments/CreateAssignment";

const ClassroomDetail = () => {
  const [assignments, setAssignments] = useState([]);
  const token = localStorage.getItem("access");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const fetchAssignments = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/assignments/", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setAssignments(data);
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Assignments</h1>
      {user.role === "teacher" && (
        <CreateAssignment onCreated={fetchAssignments} />
      )}
      <AssignmentList assignments={assignments} />
    </div>
  );
};

export default ClassroomDetail;
