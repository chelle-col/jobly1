import React from 'react';
import useApi from './hooks/useApi';
import Company from './Company';

const Companies = () => {
    const [ companies, isLoading ] = useApi( 'companies' );
    if( isLoading ){
        return <h1>Loading ... </h1>
    }
    return (
        <>
        <ul>
            {companies.map( ( c, idx ) => <Company key={idx} company={c} />)}
        </ul>
        </>
    )
}

export default Companies;