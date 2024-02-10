import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/Navbar';
import Starter from './Pages/Starter';
import StarterFeatures from './Pages/StarterFeatures'
import Reviews from './Pages/ReviewsPage';
import Footer from './Pages/Footer/'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar></Navbar>
    <Starter></Starter>
    <StarterFeatures/>
    <Reviews/>
    <Footer/>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
