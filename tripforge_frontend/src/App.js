import "./App.css";
import { useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import Hero from "./Pages/Hero";
import NewTrip from './Pages/NewTrip';
import Starter from "./Pages/Starter";
import UserProfile from "./Components/user/UserProfile";
import Signup from "./Components/Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/yourTrip",
    element: <Hero></Hero>,
  },
  {
    path: "/book-trips",
    element: <Hero></Hero>,
  },
  {
    path : "/userProfile",
    element : <UserProfile></UserProfile>
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
