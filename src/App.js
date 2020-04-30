import React from 'react';
import './App.css';
import Main from '../src/Pages/Main/main'
import Rosters from '../src/Components/Rosters/rosters'
import League from '../src/Components/League/league'

function App() {
  return (
    <div className="App">
      <League />
      <Main />
      <Rosters />
    </div>
  );
}

export default App;
