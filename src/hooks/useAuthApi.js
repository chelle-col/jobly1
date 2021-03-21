import { useState, useEffect } from 'react';
import JoblyApi from "../JoblyApi";

// Uses Api and returns information in a state object with loading
// Auth needs to do register, login 
//   the component will place token in local state
const useAuthApi = () => {
    const UNATHORIZED = 'unathorized';
    const [ token, setToken ] = useState(UNATHORIZED);
    const [ user, setUser ] = useState();
    const [ errors, setErrors ] = useState([]);

    async function getToken( user, path ) {
        try{
            let result = await JoblyApi.loginOnPath( path, user );
            setToken(result);
        }catch (e) {
            setToken(UNATHORIZED);
            setErrors(e.response.data.error.message);
        }
    }

    const login = async ( user ) =>{
        setUser({ username: user.username, password: user.password });
        await getToken( user, 'token' );
        return true;
    }

    const signup = async ( user ) => {
        setUser( { username: user.username  } );
        await getToken( user, 'register' );
    }

    useEffect( ()=> {
        async function checkToken() {
          if( token !== UNATHORIZED && user ){
            setUser(await JoblyApi.getUser( user.username, token ));
          }
        }
        checkToken();
    }, [ token, user ])
    

    return [ user, errors, login, signup ];
}

export default useAuthApi;