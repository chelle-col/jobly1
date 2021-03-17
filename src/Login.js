import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = ({ func }) => {
    const initUserData = {
        username: '',
        password: ''
    }
    const history = useHistory();
    const [ isAuthed, setAuthed ] = useState(false);
    const [ userData, setUserData ] = useState(initUserData);

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData({
            ...userData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const authed = await func( userData.username, userData.password );
        setAuthed(authed)
        if(isAuthed){
            history.push('/')
        }
    }

    return (
        <>
            {isAuthed && <h5>Username/Password is not valid, please try again</h5>}
            <form onSubmit={async(e) => handleSubmit(e)}>
                <input type='text' 
                    onChange={(e) => handleChange(e)} 
                    placeholder='username' 
                    name='username' />
                <input type='text'
                    onChange={(e) => handleChange(e)}
                    placeholder='password'
                    name='password' />
                <button>Login</button>
            </form>
        </>
    )
}

export default Login;