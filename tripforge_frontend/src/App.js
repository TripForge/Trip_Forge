import './App.css';
// import Starter from './Pages/Starter';
import Hero from './/Pages/Hero';
import UserProfile from './Components/user/UserProfile';
import PastTrips from './Components/PastTrips';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from "./redux/Store/store"
import NewTrip from './Pages/NewTrip';

function App() {


  return (
    <Provider store={store}>
      <div className="App">
        <Navbar ></Navbar>
        {/* <PastTrips></PastTrips> */}
        {/* <Hero ></Hero> */}
        <NewTrip></NewTrip>
      </div>
    </Provider>
  );
}

export default App;
