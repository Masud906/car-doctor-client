import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ChakOut from "../pages/ChakOut/ChakOut";
import Booking from "../pages/Booking/Booking";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: 'checkout/:id',
            element: <PrivateRoute><ChakOut></ChakOut></PrivateRoute>,
            loader: ({params}) => fetch(`https://car-doctor-server-one-tan.vercel.app/services/${params.id}`)
        },
        {
            path: 'bookings',
            element: <PrivateRoute><Booking></Booking></PrivateRoute>,
        }
      ]
    },
  ]);

  export default router;