import React, { useContext } from 'react';
import UserContext from './UserContext';

const Home = () => {
    const user = useContext(UserContext);
    if(user){
        return <h1>Welcome Back {user.username}</h1>
    }
    return <h1>Please sign in/sign up</h1>
}

export default Home;