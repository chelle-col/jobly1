import { useState } from 'react';
import JoblyApi from "../JoblyApi";

// Uses Api and returns information in a state object with loading
// Auth needs to do register, login 
//   the component will place token in local state
const useAuthApi = () => {
    const [ token, setToken ] = useState('unauthorized');

    async function getToken( user, path ) {
        console.log( 'inside getToken', user, path );
        try{
            let result = await JoblyApi.loginOnPath( path, user );
            console.log(result);
            setToken(result);
        }catch{
            setToken('unauthorized');
        }
    }

    async function getUser( username, token ){
        return JoblyApi.getUser( username, token );
    }

    return [ token, getToken, getUser ];
}

export default useAuthApi;