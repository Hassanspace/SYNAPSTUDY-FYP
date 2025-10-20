import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";



const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Login", element: <Login/> },
      { path: "/Signup", element: <Signup/> },

     
      
    ],
  },
];

export default routes;
