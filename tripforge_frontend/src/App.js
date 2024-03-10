import './App.css';
import { Provider } from 'react-redux';
import { store } from "./redux/Store/store"
import Starter from './Pages/Starter'
import Navbar from "./Components/Navbar"
import Hero from './Pages/Hero';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignupPage from './Pages/SignupPage/SignupPage';

const router = createBrowserRouter([
  {
    path : '/',
    element :<LoginPage/>
  }, 
  {
    path : '/book-trip',
    element : <Hero></Hero>
  },
  {
    path : '/login',
    element : <LoginPage></LoginPage>
  },
  {
    path : '/signup',
    element : <SignupPage></SignupPage>
  }
])

function App() {


  return (
    <Provider store={store}>
      <div className="App">
        {/* <Navbar ></Navbar> */}
        {/* <PastTrips></PastTrips> */}
        {/* <Hero ></Hero> */}
        <RouterProvider router={router}/>
      </div>
    </Provider>
  );
}

export default App;
