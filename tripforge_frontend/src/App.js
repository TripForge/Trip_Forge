import './App.css';
import { Provider } from 'react-redux';
import { store } from "./redux/Store/store"
import Navbar from "./Components/Navbar"
import Hero from './Pages/Hero';


function App() {


  return (
    <Provider store={store}>
      <div className="App">
        <Navbar ></Navbar>
        {/* <PastTrips></PastTrips> */}
        <Hero ></Hero>
      </div>
    </Provider>
  );
}

export default App;
