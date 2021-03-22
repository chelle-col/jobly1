import './App.css';
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
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
  const [ user, errors, login, signup, signout, updateUser ] = useAuthApi(); 
  
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={user}>
        <Navbar signout={signout} />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/login'>
              <Login login={login} errors={errors}/>
            </Route>
            <Route exact path='/signup'>
              <Signup signup={signup} errors={errors}/>
            </Route>
            <Route exact path='/jobs'>
              { user ? <Jobs /> : <Redirect to='/' />}
            </Route>
            <Route exact path='/companies'>
              { user ? <Companies /> : <Redirect to='/' />}
            </Route>
            <Route path='/companies/:handle'>
              { user ? <CompanyDetail /> : <Redirect to='/' />}
            </Route>
            <Route exact path='/profile'>
              { user ? <Profile updateUser={updateUser} /> : <Redirect to='/' />}
            </Route>
          </Switch>  
          </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
