import React from 'react';
import Stock from './Stock';
import Toggle from './Toggle';
import './App.css';

function App() {

  return (
    <div className="App">
      <h1 className="header">Finance App</h1>
      <Toggle />
      <Stock stock="VNQ"></Stock>
      <Stock stock="AMZN"></Stock>
      <Stock stock="KO"></Stock>
      <Stock stock="WMT"></Stock>
      <Stock stock="MSFT"></Stock>
      <Stock stock="CSCO"></Stock>
    </div>
  );
}

export default App;
