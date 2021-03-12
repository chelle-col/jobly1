import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Jobs from './Jobs';
import Companies from './Companies';
import Home from './Home';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Route exact path='/home'>
        <Home />
      </Route>
      <Route exact path='/jobs'>
        <Jobs />
      </Route>
      <Route exact path='/companies'>
        <Companies />
      </Route>
      <Route exact path='/profile'>
        <Profile />
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
