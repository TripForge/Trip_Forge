import './App.css';
// import Starter from './Pages/Starter'
import Navbar from "./Components/Navbar"
import Hero from './Pages/Hero';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignupPage from './Pages/SignupPage/SignupPage';
import Protected from './features/auth/components/Protected';
import ForgotPasswordPage from './Pages/ForgotPasswordPage/ForgotPasswordPage';
import Logout from './features/auth/components/Logout';
import ForgotPassword from './features/auth/components/ForgotPassword';
import UserDetails from './features/auth/components/UserDeatails';
const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />
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
    <div className="App">
      {/* <PastTrips></PastTrips> */}
      {/* <Hero ></Hero> */}
      <Navbar ></Navbar>
      <UserDetails></UserDetails>
      {/* <ForgotPassword></ForgotPassword> */}
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
