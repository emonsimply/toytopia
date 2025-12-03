import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/Error/ErrorPage";
import Toys from "../pages/Toys/Toys";
import PrivateRoute from "./PrivateRoute";
import ToyDetails from "../pages/Toys/ToyDetails";
import MyProfile from "../pages/MyProfile/MyProfile";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";
import AboutUs from "../pages/AboutUs/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/register',
        Component: Register,
      },
      {
        path: '/toys',
        element:<Toys></Toys>,
      },
      {
        path: '/toyDetails/:id',
        element:<ToyDetails></ToyDetails>,
      },
      {
        path: '/my-profile',
        element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>,
      },
      {
        path: '/forget-password',
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>,
      }
    ]
  },
]);