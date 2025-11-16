import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import ClassroomDetail from "./pages/Dashboard/ClassroomDetail";
import CreateClassroom from "./pages/Dashboard/CreateClassroom";
import JoinClassroom from "./pages/Dashboard/JoinClassroom";



const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Login", element: <Login/> },
      { path: "/Signup", element: <Signup/> },
      { path: "/Dashboard", element: <Dashboard/> },
      {path: "/classroom/:id" , element: <ClassroomDetail />},
      { path: "/classroom/create", element: <CreateClassroom/> },
      { path: "/classroom/join", element: <JoinClassroom/> },




     
      
    ],
  },
];

export default routes;
