import React, { useContext } from 'react';
import useApi from './hooks/useApi';
import Job from './Job';
import UserContext from './UserContext';

const Jobs = () => {
    const user = useContext(UserContext);
    const [ jobs, isLoading ] = useApi( 'jobs' );
    if( isLoading ){
        return <h1>Loading ... </h1>
    }
    return (
        <>
        <h1>Jobs</h1>
        <ul>
            {jobs.map( ( j, idx ) => <Job key={idx} job={j} />)}
        </ul>
        </>
    )
}

export default Jobs;