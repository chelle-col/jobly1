import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form } from 'reactstrap';
import UserContext from '../UserContext';
import InputGroup from './InputGroup';

// The login page
const Login = ({ login }) => {
    const user = useContext(UserContext);

    const initUserData = {
        username: '',
        password: ''
    }

    const history = useHistory();
    const [ isAuthed, setAuthed ] = useState(false);
    const [ userData, setUserData ] = useState(initUserData);

    // Handles the input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(userData => ({
            ...userData,
            [name]: value
        }));
    }

    // When the user is successfully logged in will return to home page
    useEffect( ()=> {
        if(user && user.email){
            history.push('/');
        }
    }, [ user, history ]);

    // Handle the submit action
    const handleSubmit = async (e) => {
        e.preventDefault();
        setAuthed(await login( userData ));
    };

    return (
        <>
            {isAuthed && <h5 className='text-danger'>Username/Password is not valid, please try again</h5>}
            <Form className='m-5 p-3 border border-secondary' onSubmit={ async (e) => handleSubmit(e)}>
                <h1>Login</h1>
                <InputGroup name={'username'}
                    type={'text'}
                    errors={[]}
                    handleChange={handleChange}
                    userData={userData.username}/>
                <InputGroup name={'password'}
                    type={'password'}
                    errors={[]}
                    handleChange={handleChange}
                    userData={userData.password}/>
                <Button>Login</Button>
            </Form>
        </>
    )
}

export default Login;