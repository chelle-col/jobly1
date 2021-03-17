import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Jobs from './Jobs';
import Companies from './Companies';
import Home from './Home';
import Profile from './Profile';
import CompanyDetail from './CompanyDetail';
import Login from './Login';
import useAuthApi from './hooks/useAuthApi';
import UserContext from './UserContext';

function App() {
  const [ user, setUser ] = useState();
  const [ token, getData, getUser ] = useAuthApi( 'token' );
  
  const login = async ( username, password ) =>{
    await getData(username, password);
    if( token !== 'unathorized' ){
      setUser(await getUser( username, token ));
      return true;
    }
    return false;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={user}>
        <Navbar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/login'>
              <Login func={login} />
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
          </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
