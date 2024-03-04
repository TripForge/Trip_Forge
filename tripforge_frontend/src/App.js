import './App.css';
// import Starter from './Pages/Starter';
import Hero from './/Pages/Hero';
import UserProfile from './Components/user/UserProfile';
import PastTrips from './Components/PastTrips/components';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from "./redux/Store/store"


function App() {
  const [coordinates, setCoordinates] = useState({});


  return (
    <Provider store={store}>
      <div className="App">
        <Navbar setCoordinates={setCoordinates}></Navbar>
        {/* <PastTrips></PastTrips> */}
        <Hero coordinates={coordinates} setCoordinates={setCoordinates}></Hero>
      </div>
    </Provider>
  );
}

export default App;
