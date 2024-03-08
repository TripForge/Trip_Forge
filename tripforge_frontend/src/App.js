import './App.css';
import { useState } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

import NewTrip from './Pages/NewTrip';
import Hero from './Pages/Hero';
const router = createBrowserRouter([
  {
    path : '/',
    element : <NewTrip/>
  },
  {
    path : '/yourTrip',
    element : <Hero></Hero>
  }
])

function App() {


  return (

      <RouterProvider router={router}/>
  );
}

export default App;
