import { useState } from 'react';
import JoblyApi from "../JoblyApi";

// Uses Api and returns information in a state object with loading
// Auth needs to do register, login 
//   the component will place token in local state
const useAuthApi = ( path ) => {
    // const [ token, setToken ] = useState();
    const [ isLoading, setIsLoading ] = useState(true);

    async function getData( username, password ) {
        try{
            let result = await JoblyApi.loginOnPath( path, username, password );
            // setToken(result);
            setIsLoading(false);
            return result;
        }catch{
            // setToken('unauthorized');
            setIsLoading(false);
            return 'unathorized';
        }
    }

    async function getUser( username, token ){
        return JoblyApi.getUser( username, token );
    }

    return [ isLoading, getData, getUser ];
}

export default useAuthApi;