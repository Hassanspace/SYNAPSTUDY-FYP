import React from "react";
import AssignmentCard from "../Assignments/AssignmentCard";

const AssignmentList = ({ assignments }) => {
  if (!assignments.length)
    return <p className="text-gray-700 text-center">No assignments yet.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {assignments.map((assignment) => (
        <AssignmentCard key={assignment.id} assignment={assignment} />
      ))}
    </div>
  );
};

export default AssignmentList;
