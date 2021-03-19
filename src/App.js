import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Jobs from './Job/Jobs';
import Companies from './Company/Companies';
import Home from './Home';
import Profile from './Profile';
import CompanyDetail from './Company/CompanyDetail';
import Login from './LoginSignUP/Login';
import useAuthApi from './hooks/useAuthApi';
import UserContext from './UserContext';
import Signup from './LoginSignUP/Signup';

function App() {
  const [ user, setUser ] = useState();
  const [ token, getToken, getUser ] = useAuthApi();
  
  const login = async ( user ) =>{
    console.log('inside login', user);
    setUser({ username: user.username, password: user.password });
    await getToken( user, 'token' );

    return true;
  }

  const signup = async ( user ) => {
    const username = user.username;
    setUser( { username  } );
    await getToken( user, 'register' );
  }

  useEffect( ()=> {
    async function checkToken() {
      console.log('inside checktoken', token, user);
      if( token !== 'unathorized' && user ){
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
            <Route exact path='/signup'>
              <Signup signup={signup}/>
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
