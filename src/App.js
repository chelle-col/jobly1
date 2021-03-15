import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Jobs from './Jobs';
import Companies from './Companies';
import Home from './Home';
import Profile from './Profile';
import CompanyDetail from './CompanyDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route exact path='/jobs'>
            <Jobs />
          </Route>
          <Route exact path='/companies'>
            <Companies />
          </Route>
          <Route path='/companies/:handle'>
            <CompanyDetail />
          </Route>
          <Route exact path='/profile'>
            <Profile />
          </Route>
        </Switch>  
      </BrowserRouter>
    </div>
  );
}

export default App;
