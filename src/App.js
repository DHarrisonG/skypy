import React from 'react';
// import logo from './logo.svg';
import './App.css';

import store from './store'
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"
import _ from 'lodash';

const App = () => {
  const { contacts, user, activeUserId } = store.getState();

  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)}/>
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
};

export default App;
