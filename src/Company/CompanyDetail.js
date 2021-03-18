import React from 'react';
import { useParams } from 'react-router-dom';
import useApi from './hooks/useApi';
import Job from './Job';
import { Card, CardTitle, CardText, CardBody } from 'reactstrap';

const ComapanyDetail = () => {
    const { handle } = useParams();
    const [ company, isLoading ] = useApi(`companies`, `/${handle}`);

    if( isLoading ){
        return <h1>Loading... </h1>
    }

    return (
        <>
        <div>
            <Card>
              <CardBody>
                <CardTitle tag="h5">{company.name}</CardTitle>
                <CardText>{company.description}</CardText>
              </CardBody>
            </Card>
        </div>
        {company.jobs.map( ( j, idx ) => <Job key={idx} job={j}/>)}
        </>
    )
}

export default ComapanyDetail;