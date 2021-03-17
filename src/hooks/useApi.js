import { useState, useEffect } from 'react';
import JoblyApi from "../JoblyApi";

// Uses Api and returns information in a state object with loading
const useApi = ( path, secondPath = '' ) => {
    const [ data, setData ] = useState();
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect( () =>{
        async function getData() {
            let data = await JoblyApi.getFromPath( path, secondPath );

            setData(data);

            setIsLoading(false);
        }
        getData();
    }, [path])

    return [ data, isLoading ];
}

export default useApi;