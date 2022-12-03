import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import About from './view/About';
import Cv from './view/Cv'

function App() {
  return (
    <div className="App">
      <>
      <Routes>
      <Route path='/' element={<About />} />
      <Route path='/cv' element={<Cv />} />
      </Routes>
      </>
    </div>
  );
}

export default App;
