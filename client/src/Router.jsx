import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ViewPost from "./pages/ViewPost";
import SignUp from "./pages/SignUp";
// import CreatePost from "./pages/CreatePost";
// import CreateUser from "./pages/CreateUser";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "blogposts/:postId",
      element: <ViewPost />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
    // {
    //   path: "create-post",
    //   element: <CreatePost />,
    // },
    // {
    //   path: "create-user",
    //   element: <CreateUser />,
    // },
  ]);

  return <RouterProvider router={router} />;
}
