import { useState, useEffect } from 'react';
import JoblyApi from "../JoblyApi";

// Uses Api and returns information in a state object with loading
// Auth does register, login, token and user
// Returns [ user, errors, signup, login ]
const useAuthApi = () => {
    const UNATHORIZED = 'unathorized';
    const [ token, setToken ] = useState(UNATHORIZED);
    const [ user, setUser ] = useState();
    const [ errors, setErrors ] = useState([]);

    // Gets the token from a given user and path
    async function getToken( user, path ) {
        try{
            let result = await JoblyApi.loginOnPath( path, user );
            setToken(result);
        }catch (e) {
            setToken(UNATHORIZED);
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

    // If token changes, get user from api
    useEffect( ()=> {
        async function checkToken() {
          if( token !== UNATHORIZED && user ){
            setUser(await JoblyApi.getUser( user.username, token ));
          }
        }
        checkToken();
    }, [ token ]);

    return [ user, errors, login, signup ];
}

export default useAuthApi;