import React from 'react';
import logo from './logo.svg';
import './App.css';
import Buah from './Tugas-9/Buah';
import TabelHargaBuah from './Tugas-10/TabelHargaBuah';
import Timer from './Tugas-11/Timer';

function App() {
  return (
    <div className="App">
   <h1> Learning ReactJs </h1>
      <Timer />
      <Buah />
      <TabelHargaBuah />
    </div>
  );
}

export default App;