import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Button, Form } from 'reactstrap';
import UserContext from '../UserContext';
import InputGroup from './InputGroup';

const Signup = ({ signup }) => {
    const initUserData = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
    }

    const history = useHistory();
    const user = useContext(UserContext);

    const [ userData, setUserData ] = useState(initUserData);
    const [ errors, setErrors ] = useState([]);
    const errorMessage = <span className='text-danger'>This field cannot be empty.</span>;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(userData => ({
            ...userData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const empty = Object.entries(userData).map( u => {
            if(u[1] === ''){
                return u[0];
            }
            return undefined;}).filter( e => e !== undefined );
        setErrors(empty);
        if( empty.length === 0){
            await signup( userData );
        }
    };

    useEffect( () => {
        if(user && user.email){
            history.push('/');
        }
    }, [ user ]);

    return (
        <Form className='m-5 p-3 border border-secondary' onSubmit={ async (e) => handleSubmit(e)}>
                <h1>Signup</h1>
                <InputGroup name={'username'}
                    type={'text'}
                    errors={errors}
                    handleChange={handleChange}
                    errorMessage={errorMessage}
                    userData={userData.username}/>
                <InputGroup name={'password'}
                    type={'password'}
                    errors={errors}
                    handleChange={handleChange}
                    errorMessage={errorMessage}
                    userData={userData.password}/>
                <InputGroup name={'firstName'}
                    type={'text'}
                    errors={errors}
                    handleChange={handleChange}
                    errorMessage={errorMessage}
                    userData={userData.firstName}/>
                <InputGroup name={'lastName'}
                    type={'text'}
                    errors={errors}
                    handleChange={handleChange}
                    errorMessage={errorMessage}
                    userData={userData.lastName}/>
                <InputGroup name={'email'}
                    type={'email'}
                    errors={errors}
                    handleChange={handleChange}
                    errorMessage={errorMessage}
                    userData={userData.email}/>
                <Button>Signup</Button>
            </Form>
    )
}

export default Signup;