import './App.css';
// import Starter from './Pages/Starter'
import Navbar from "./Components/Navbar"
import Hero from './Pages/Hero';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignupPage from './Pages/SignupPage/SignupPage';
import Protected from './features/auth/components/Protected';
import ForgotPasswordPage from './Pages/ForgotPasswordPage/ForgotPasswordPage';

import Logout from './features/auth/components/Logout';
import ForgotPassword from './features/auth/components/ForgotPassword';
import UserDetails from './features/auth/components/UserDeatails';
import Starter from "./Pages/Starter"
const router = createBrowserRouter([
  {
    path: '/',
    element: <Starter />
  },
  {
    path: '/starter',
    element: <Starter />
  },
  {
    path: '/book-trip',
    element: <Protected><Hero></Hero></Protected>
  },
  {
    path: '/book-trip',
    element: <Protected><Hero></Hero></Protected>
  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>
  },
  {
    path: '/signup',
    element: <SignupPage></SignupPage>
  },
  {
    path: '/logout',
    element: <Logout></Logout>
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage></ForgotPasswordPage>
  }
])

function App() {


  return (
    <div>

      {/* <Navbar ></Navbar> */}
      {/* <PastTrips></PastTrips> */}
      {/* <Hero ></Hero> */}
      <UserDetails></UserDetails>
      <RouterProvider router={router} />
    </div>

  );
}

export default App;
