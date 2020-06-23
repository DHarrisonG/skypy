import React from 'react';
// import logo from './logo.svg';
import './App.css';

import store from './store'
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"
import _ from 'lodash';

const App = () => {
  const { contacts } = store.getState();

  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)}/>
      <Main />
    </div>
  );
};

export default App;
