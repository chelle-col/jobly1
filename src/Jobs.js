import React from 'react';
import useApi from './hooks/useApi';
import Job from './Job';

const Jobs = () => {
    const [ jobs, isLoading ] = useApi( 'jobs' );
    if( isLoading ){
        return <h1>Loading ... </h1>
    }
    return (
        <>
        <ul>
            {jobs.map( ( j, idx ) => <Job key={idx} job={j} />)}
        </ul>
        </>
    )
}

export default Jobs;