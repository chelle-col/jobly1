import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import UserContext from '../UserContext';
import InputGroup from './InputGroup';

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
        setAuthed(await login( userData ));
    };

    return (
        <>
            {isAuthed && <h5>Username/Password is not valid, please try again</h5>}
            <Form className='m-5 p-3 border border-secondary' onSubmit={ async (e) => handleSubmit(e)}>
                <h1>Login</h1>
                <InputGroup name={'username'}
                    type={'text'}
                    errors={[]}
                    errorMessage={''}
                    handleChange={handleChange}
                    userData={userData.username}/>
                <InputGroup name={'password'}
                    type={'password'}
                    errors={[]}
                    errorMessage={''}
                    handleChange={handleChange}
                    userData={userData.password}/>
                <Button>Login</Button>
            </Form>
        </>
    )
}

export default Login;