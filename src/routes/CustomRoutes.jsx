import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Profile from "../components/profile/Profile";
import Home from "../pages/home/Home";
import UploadPhoto from "../components/profile/UploadPhoto";
import UpdateProfile from "../components/profile/UpdateProfile";
import Settings from "../components/profile/Settings";

const CustomRoutes = () => {
  let myRoutes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/profile",
      element: <Profile />,
      children: [
        {
          path: "update-profile",
          element: <UpdateProfile />,
        },
        {
          path: "upload-photo",
          element: <UploadPhoto />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
      ],
    },
    {
      path: "/login",
      element: (
        <Login
        // userAuth={userAuth}
        // isLoggedIn={isLoggedIn}
        // setIsLoggedIn={isLoggedIn}
        />
      ),
    },
    {
      path: "/signup",
      element: <Register />,
    },
  ]);
  return myRoutes;
};

export default CustomRoutes;
