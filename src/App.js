import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
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
  const history = useHistory();
  const [ user, setUser ] = useState();
  const [ token, setToken ] = useState();
  const [ isLoading, getData, getUser ] = useAuthApi( 'token' );
  
  const login = async ( username, password ) =>{
    setUser({ username: username, password: password });
    setToken(await getData(username, password));

    return false;
  }

  useEffect( ()=> {
    async function checkToken() {
      if( token !== 'unathorized' && token !== undefined){
        setUser(await getUser( user.username, token ));
      }
    }
    checkToken();
  }, [token])

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
              <Login login={login} />
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
