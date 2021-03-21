import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Button, Form } from 'reactstrap';
import UserContext from '../UserContext';
import InputGroup from './InputGroup';
import formatError from './formatErrors';

const Signup = ({ signup, errors }) => {
    const initUserData = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
    }

    const history = useHistory();
    const user = useContext(UserContext);
    const [ formErrors, setFormErrors ] = useState([]);

    const [ userData, setUserData ] = useState(initUserData);
    const errorMessage = 'This field cannot be empty.';

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
                return {
                    name: u[0],
                    message: errorMessage
                };
            }
            return undefined;
        }).filter( e => e !== undefined );
        setFormErrors(empty);
        
        if( empty.length === 0){
            await signup( userData );
        }
    };

    useEffect( () => {
        // If useAuthApi is successful the user changes
        // Redirect to home page
        if(user && user.email){
            history.push('/');
        }
    }, [ user, history ]);

    useEffect( () => {
        // If useAuthApi has errors the errors change
        // Errors get put in erros
        const formatedErrors = errors.map( e => formatError(e));
        console.log(formatedErrors);
        setFormErrors( formatedErrors );
    }, [ errors ]) ;

    return (
        <Form className='m-5 p-3 border border-secondary' onSubmit={ async (e) => handleSubmit(e)}>
                <h1>Signup</h1>
                <InputGroup name={'username'}
                    type={'text'}
                    errors={formErrors}
                    handleChange={handleChange}
                    userData={userData.username}/>
                <InputGroup name={'password'}
                    type={'password'}
                    errors={formErrors}
                    handleChange={handleChange}
                    userData={userData.password}/>
                <InputGroup name={'firstName'}
                    type={'text'}
                    errors={formErrors}
                    handleChange={handleChange}
                    userData={userData.firstName}/>
                <InputGroup name={'lastName'}
                    type={'text'}
                    errors={formErrors}
                    handleChange={handleChange}
                    userData={userData.lastName}/>
                <InputGroup name={'email'}
                    type={'email'}
                    errors={formErrors}
                    handleChange={handleChange}
                    userData={userData.email}/>
                <Button>Signup</Button>
            </Form>
    )
}

export default Signup;