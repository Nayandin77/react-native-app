import React from 'react';
import Stock from './Stock';
import './App.css';

function App() {

  return (
    <div className="App">
      <h1>Finance App</h1>
      <Stock stock="VNQ"></Stock>
      <Stock stock="AMZN"></Stock>
    </div>
  );
}

export default App;
