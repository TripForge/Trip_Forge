import './App.css';
// import Starter from './Pages/Starter';
import Hero from './/Pages/Hero';
import UserProfile from './Components/user/UserProfile';
import PastTrips from './Components/PastTrips/components';
import Navbar from './Components/Navbar';
import { useState } from 'react';
function App() {
  const [coordinates, setCoordinates] = useState({});


  return (
    <div className="App">
      <Navbar setCoordinates={setCoordinates}></Navbar>
      {/* <PastTrips></PastTrips> */}
      <Hero coordinates={coordinates} setCoordinates={setCoordinates}></Hero>
    </div>
  );
}

export default App;
