import React from 'react';
import { useParams } from 'react-router-dom';
import useApi from './useApi';

const ComapanyDetail = () => {
    const { handle } = useParams();
    const [ company, isLoading ] = useApi(`companies`, `/${handle}`);
    if( isLoading ){
        return <h1>Loading... </h1>
    }
    console.log(company);
    return <h1>{handle}</h1>
}

export default ComapanyDetail;