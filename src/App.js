import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {BrowserRouter as Router } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import AdsLanding from './pages/Landing/AdsLanding';
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/ads' element={<AdsLanding />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
