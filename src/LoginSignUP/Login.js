import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import UserContext from '../UserContext';

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
        setAuthed(await login( userData.username, userData.password ));
    };

    return (
        <>
            {isAuthed && <h5>Username/Password is not valid, please try again</h5>}
            <Form className='m-5 p-3 border border-secondary' onSubmit={ async (e) => handleSubmit(e)}>
                <h1>Login</h1>
                <FormGroup className='mx-3 text-left'>
                    <Label for='username'>Username</Label>
                    <Input type='text' 
                        onChange={handleChange} 
                        value={userData.username}
                        placeholder='username' 
                        name='username' />
                </FormGroup>
                <FormGroup className='mx-3 text-left'>
                    <Label for='password'>Password</Label>
                    <Input type='text'
                        onChange={handleChange}
                        value={userData.password}
                        placeholder='password'
                        name='password' />
                </FormGroup>
                <Button>Login</Button>
            </Form>
        </>
    )
}

export default Login;