import React from 'react';
import { Card, CardTitle, CardText, CardBody } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import './Company.css';

const Company = ({ company }) => {
    const history = useHistory();
    const handleClick = () => {
        history.push(`/companies/${company.handle}`);
    }

    return (
        <div>
            <Card className='Company-clickable my-3' onClick={handleClick}>
              <CardBody>
                <CardTitle tag="h5">{company.name}</CardTitle>
                <CardText>{company.description}</CardText>
              </CardBody>
            </Card>
          </div>
        )
}

export default Company;