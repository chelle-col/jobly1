import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'reactstrap';
import InputGroup from './LoginSignUP/InputGroup';
import UserContext from './UserContext';
import JoblyApi from './JoblyApi';
import { useHistory } from 'react-router';

const Profile = ({ updateUser }) => {
    const history = useHistory();
    const UNAUTHORIZED = 'unauthorized';
    const user = useContext(UserContext);
    const initData = {
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: ''
    }
    const [ formData, setFormData ] = useState( initData );
    const [ error, setErrors ] = useState([]);
    const [ auth, setAuthed ] = useState( UNAUTHORIZED );
 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setAuthed( await authenticate() );
    };

    const authenticate = async () => {
        try{
            return await JoblyApi.loginOnPath( 'token', { username: formData.username, password: formData.password} );
        }catch (e) {
            setErrors('Password not valid')
            return UNAUTHORIZED;
        }
    }

    useEffect( () => {
        async function update() {
            if( auth !== UNAUTHORIZED ){
                updateUser( formData );
                history.push('/');
            }
        }
        update();
    }, [ auth ]);

    return (
        <>
        <h1>{user.username}</h1>
        { error && <span className='text-danger'>{error}</span>}
        <Form onSubmit={handleSubmit}>
            <InputGroup name={'firstName'}
                label={'First Name'}
                type='text'
                errors={[]}
                handleChange={handleChange}
                userData={formData.firstName}/>
            <InputGroup name={'lastName'}
                label={'Last Name'}
                type='text'
                errors={[]}
                handleChange={handleChange}
                userData={formData.lastName}/>
            <InputGroup name={'email'}
                label={'Email'}
                type='text'
                errors={[]}
                handleChange={handleChange}
                userData={formData.email}/>
            <InputGroup name={'password'}
                label={'Enter Password To confirm changes'}
                placeholder={''}
                type='password'
                errors={[]}
                handleChange={handleChange}
                userData={formData.password}/>
            <Button>Save Changes</Button>
        </Form>
        </>
    )
}
export default Profile;