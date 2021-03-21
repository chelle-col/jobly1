import { useState, useEffect } from 'react';
import JoblyApi from "../JoblyApi";
import useLocalStorage from './useLocalStorage';

// Uses Api and returns information in a state object with loading
// Auth does register, login, token and user
// Returns [ user, errors, signup, login, logout ]
const useAuthApi = () => {
    const UNAUTHORIZED = 'unauthorized';                // the Unauth token
    const [ token, setToken ] = useState(UNAUTHORIZED); // initalize token to unauth
    const [ user, setUser ] = useState();               // holds the user
    const [ errors, setErrors ] = useState([]);         // holds any errors from db
    const [ getLocalToken, setLocalToken, removeLocalToken ] = useLocalStorage();
                                                        // local storage

    // Gets the token from a given user and path
    async function getToken( user, path ) {
        try{
            let result = await JoblyApi.loginOnPath( path, user );
            setToken(result);
            setLocalToken( user.username, result );
        }catch (e) {
            setToken(UNAUTHORIZED);
            setErrors(e.response.data.error.message);
        }
    };

    // Logs the user in, using getToken
    const login = async ( user ) =>{
        setUser({ username: user.username, password: user.password });
        await getToken( user, 'token' );
        return true;
    };

    // Signs user up using getToken
    const signup = async ( user ) => {
        setUser( { username: user.username  } );
        await getToken( user, 'register' );
    };

    // Signs user out of app
    const signout = () => {
        setUser(undefined);
        setToken(UNAUTHORIZED);
        removeLocalToken();
    };

    // If token changes, get user from api
    // **DO NOT ADD USER TO DEPENDANCIES**
    useEffect( ()=> {
        async function checkToken() {
          if( token !== UNAUTHORIZED && user ){
            setUser(await JoblyApi.getUser( user.username, token ));
          }
        }
        checkToken();
    }, [ token ]);

    // Check for token on load
    useEffect( ()=>{
        console.log('getting token');
        const localToken = getLocalToken( UNAUTHORIZED );
        console.log(localToken)
        setToken(localToken);
    }, []);

    return [ user, errors, login, signup, signout ];
}

export default useAuthApi;