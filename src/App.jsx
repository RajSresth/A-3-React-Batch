import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Topic-8 React Routing/layouts/RootLayout";
import Signup from "./Topic-8 React Routing/pages/Signup";
import Login from "./Topic-8 React Routing/pages/Login";
import NotFound from "./Topic-8 React Routing/pages/NotFound";
import Home from "./Topic-8 React Routing/pages/Home";
import Shop from "./Topic-8 React Routing/pages/Shop";
import Profile from "./Topic-8 React Routing/pages/Profile";
import Cart from "./Topic-8 React Routing/pages/Cart";
import Contact from "./Topic-8 React Routing/pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
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
