import { createBrowserRouter } from "react-router-dom";
import Home from "@/app/Home/Home";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Home />,
  },
  {
    path: "/projects/:projectName?",
    element: <Home />,
  },
]);

export default router;
