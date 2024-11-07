import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ViewPost from "./pages/ViewPost";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import PropTypes from "prop-types";

export default function Router({ user, setUser }) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home user={user} setUser={setUser} />,
    },
    {
      path: "blogposts/:postId",
      element: <ViewPost />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

Router.propTypes = {
  user: PropTypes.object,
  setUser: PropTypes.func,
};
