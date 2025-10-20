import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import routes from "./routes";

function AppRoutes() {
  // useRoutes will render based on the routes array
  return useRoutes(routes);
}

function App() {
  return (
   
     <Router>
      <AppRoutes />
    </Router>
   
  );
}

export default App;
