import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Main from "./components/Main"
import Sidebar from "./components/Sidebar"

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
