import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {BrowserRouter as Router } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
