import './App.css';
import Starter from './Pages/Starter';
import StarterFeatures from './Pages/StarterFeatures'
import Reviews from './Pages/ReviewsPage';
import Footer from './Pages/Footer/'

function App() {
  return (
    <div className="App">
      <Starter></Starter>
      <StarterFeatures />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
