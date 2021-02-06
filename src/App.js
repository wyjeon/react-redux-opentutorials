import React, {Component} from 'react'
import './App.css';

import AddNumberRoot from './components/AddNumberRoot'
import DisplayNumberRoot from './components/DisplayNumberRoot'

function App() {
  return (
    <div className="App">
      <h1>ROOT</h1>
      <AddNumberRoot/>
      <DisplayNumberRoot/>
    </div>
  );
}

export default App;
