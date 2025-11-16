import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ClassroomDetail = () => {
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));
  
  const [assignments, setAssignments] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  const [shelves, setShelves] = useState([]);
  const [activeTab, setActiveTab] = useState("assignments");
  const [activeAssignment, setActiveAssignment] = useState(null);
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/classrooms/${id}/assignments/`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("access")}` },
    }).then(res => res.json()).then(data => setAssignments(data));

    fetch(`http://127.0.0.1:8000/api/classrooms/${id}/quizzes/`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("access")}` },
    }).then(res => res.json()).then(data => setQuizzes(data));

    fetch(`http://127.0.0.1:8000/api/classrooms/${id}/shelves/`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("access")}` },
    }).then(res => res.json()).then(data => setShelves(data));
  }, [id]);

  const loadDiscussions = (assignmentId) => {
    fetch(`http://127.0.0.1:8000/api/assignments/${assignmentId}/discussions/`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("access")}` },
    })
      .then(res => res.json())
      .then(data => setDiscussions(data));

    setActiveAssignment(assignmentId);
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col">

      {/* Header */}
      <header className="w-full py-5 border-b flex justify-center">
        <h1 className="text-3xl font-bold">Classroom {id}</h1>
      </header>

      <div className="flex justify-center px-6 py-10">
        <div className="bg-white/20 backdrop-blur-xl border border-gray-300/40 shadow-xl rounded-2xl p-8 w-full max-w-5xl">

          {/* Role-based Create Buttons */}
          {user.role === "teacher" && (
            <div className="flex gap-4 justify-center mb-6">
              <Link
                to={`/classroom/${id}/assignment/create`}
                className="px-4 py-2 bg-blue-600 text-white rounded-xl"
              >
                Create Assignment
              </Link>

              <Link
                to={`/classroom/${id}/quiz/create`}
                className="px-4 py-2 bg-purple-600 text-white rounded-xl"
              >
                Create Quiz
              </Link>
            </div>
          )}

          {/* Tabs */}
          <div className="flex gap-4 justify-center mb-6">
            <TabButton tab="assignments" activeTab={activeTab} setActiveTab={setActiveTab} />
            <TabButton tab="quizzes" activeTab={activeTab} setActiveTab={setActiveTab} />
            {user.role === "student" && (
              <TabButton tab="shelves" activeTab={activeTab} setActiveTab={setActiveTab} />
            )}
          </div>

          {/* TAB CONTENT */}
          <div>

            {/* Assignments Tab */}
            {activeTab === "assignments" && (
              <AssignmentTab
                assignments={assignments}
                user={user}
                loadDiscussions={loadDiscussions}
                activeAssignment={activeAssignment}
                discussions={discussions}
              />
            )}

            {/* Quizzes Tab */}
            {activeTab === "quizzes" && (
              <QuizTab quizzes={quizzes} />
            )}

            {/* Shelves (Students only) */}
            {activeTab === "shelves" && user.role === "student" && (
              <ShelvesTab shelves={shelves} />
            )}

          </div>

        </div>
      </div>

    </div>
  );
};

// --- SUB COMPONENTS ---

const TabButton = ({ tab, activeTab, setActiveTab }) => (
  <button
    className={`px-4 py-2 rounded-xl transition font-semibold ${
      activeTab === tab
        ? "bg-gradient-to-r from-[#4CFF83] via-[#3AC2FF] to-[#6A4CFF] text-white"
        : "bg-white/50 backdrop-blur-md border text-black"
    }`}
    onClick={() => setActiveTab(tab)}
  >
    {tab.charAt(0).toUpperCase() + tab.slice(1)}
  </button>
);

const AssignmentTab = ({ assignments, user, loadDiscussions, activeAssignment, discussions }) => (
  <div className="space-y-4">
    {assignments.map(a => (
      <div key={a.id} className="bg-white p-5 rounded-xl shadow border">

        <div className="flex justify-between">
          <h3 className="font-bold text-xl">{a.title}</h3>

          {/* Load Discussion */}
          <button
            className="px-3 py-1 bg-blue-600 text-white rounded-xl"
            onClick={() => loadDiscussions(a.id)}
          >
            Discussions
          </button>
        </div>

        <p className="text-gray-700">{a.description}</p>

        {/* Student Upload Assignment */}
        {user.role === "student" && (
          <div className="mt-3 flex gap-2">
            <input type="file" className="px-3 py-2 border rounded bg-white" />
            <button className="px-4 py-2 bg-green-600 text-white rounded-xl">
              Upload
            </button>
          </div>
        )}

        {/* Assignment Discussion Thread */}
        {activeAssignment === a.id && (
          <div className="mt-4 bg-gray-100 rounded-xl p-4 space-y-3">
            {discussions.map(d => (
              <div key={d.id} className="bg-white p-3 rounded-xl shadow">
                <strong>{d.user}</strong>: {d.message}
              </div>
            ))}

            {/* Student Sends Message */}
            <form className="flex gap-2">
              <input
                type="text"
                placeholder="Write a message..."
                className="flex-1 px-3 py-2 border rounded-xl"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-xl">
                Send
              </button>
            </form>
          </div>
        )}

      </div>
    ))}
  </div>
);

const QuizTab = ({ quizzes }) => (
  <div className="space-y-4">
    {quizzes.map(q => (
      <div key={q.id} className="bg-white p-5 rounded-xl shadow border">
        <h3 className="font-bold text-xl">{q.title}</h3>
        <p className="text-gray-700">{q.description}</p>
      </div>
    ))}
  </div>
);

const ShelvesTab = ({ shelves }) => (
  <div className="space-y-4">
    {shelves.map(s => (
      <div key={s.id} className="bg-white p-5 rounded-xl shadow border">
        <h3 className="font-bold text-xl">{s.title}</h3>
        <p className="text-gray-700">{s.description}</p>
      </div>
    ))}
  </div>
);

export default ClassroomDetail;
