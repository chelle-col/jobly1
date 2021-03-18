import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from './UserContext';

const Login = ({ login }) => {
    const user = useContext(UserContext);

    const initUserData = {
        username: '',
        password: ''
    }
    
    const history = useHistory();
    const [ isAuthed, setAuthed ] = useState(false);
    const [ userData, setUserData ] = useState(initUserData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(userData => ({
            ...userData,
            [name]: value
        }));
    }

    useEffect( ()=> {
        if(user && user.email){
            history.push('/');
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(userData);
        await login( userData.username, userData.password );
    }

    return (
        <>
            {isAuthed && <h5>Username/Password is not valid, please try again</h5>}
            <form onSubmit={ async (e) => handleSubmit(e)}>
                <input type='text' 
                    onChange={handleChange} 
                    value={userData.username}
                    placeholder='username' 
                    name='username' />
                <input type='text'
                    onChange={handleChange}
                    value={userData.password}
                    placeholder='password'
                    name='password' />
                <button>Login</button>
            </form>
        </>
    )
}

export default Login;