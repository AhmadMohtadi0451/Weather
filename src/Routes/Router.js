import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import SinglePage from "../Pages/SinglePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "weather/:city",
    element: <SinglePage />,
  },
]);

export default router;
