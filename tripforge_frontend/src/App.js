import './App.css';
// import Starter from './Pages/Starter';
import Starter from './Pages/Starter';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import Hero from './Pages/Hero';
import Signup from './Components/Signup/Signup';

function App() {
  const [coordinates, setCoordinates] = useState({});


  return (
    <div className="App">
      <Hero/>
    </div>
  );
}

export default App;
