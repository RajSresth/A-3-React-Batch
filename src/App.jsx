import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Topic-8 React Routing/layouts/RootLayout";
import Signup from "./Topic-8 React Routing/pages/Signup";
import Login from "./Topic-8 React Routing/pages/Login";
import NotFound from "./Topic-8 React Routing/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
