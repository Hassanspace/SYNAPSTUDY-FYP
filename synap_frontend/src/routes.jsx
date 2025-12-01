import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import ClassroomDetail from "./pages/Dashboard/ClassroomDetail/ClassroomDetail";
import CreateClassroom from "./pages/Dashboard/CreateClassroom";
import JoinClassroom from "./pages/Dashboard/JoinClassroom";
import ProfilePage from "./pages/Profile/ProfilePage";
import ProfileSetup from "./pages/Profile/ProfileSetup";

// Assignment & Quiz components

import AssignmentDetail from "./pages/Assignments/AssignmentDetail";
import AssignmentDiscussion from "./pages/Assignments/AssignmentDiscussion";
import CreateAssignment from "./pages/Assignments/CreateAssignment";
// import QuizCreate from "./pages/Assignments/QuizCreate";
// import QuizDetail from "./pages/Assignments/QuizDetail";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Login", element: <Login /> },
      { path: "/Signup", element: <Signup /> },
      { path: "/Dashboard", element: <Dashboard /> },
      { path: "/classroom/:id", element: <ClassroomDetail /> },
      { path: "/classroom/create", element: <CreateClassroom /> },
      { path: "/classroom/join", element: <JoinClassroom /> },
      { path: "/Profile", element: <ProfilePage /> },
      { path: "/profile-setup", element: <ProfileSetup /> },

      // Assignments routes
      { path: "/classroom/:id/assignment/create", element: <CreateAssignment/> },
      { path: "/classroom/:id/assignment/:assignmentId", element: <AssignmentDetail /> },
      { path: "/classroom/:id/assignment/:assignmentId/discussion", element: <AssignmentDiscussion /> },

      // // Quizzes routes
      // { path: "/classroom/:id/quiz/create", element: <QuizCreate /> },
      // { path: "/classroom/:id/quiz/:quizId", element: <QuizDetail /> },
    ],
  },
];

export default routes;
