import React from 'react';
import { Card, CardTitle, Button, CardText, CardBody } from 'reactstrap';

const Job = ({ job }) => {
  const handleClick = () => {
    console.log('applied');
  }

    return (
    <div>
        <Card>
          <CardBody>
            <CardTitle tag="h5">{job.title}</CardTitle>
            { job.salary !== null && <CardText>Salary: {job.salary}</CardText>}
            <CardText>Company: {job.companyName}</CardText>
            { job.equity !== null && <CardText>Equity: {job.equity}</CardText>}
            <Button onClick={handleClick}>Apply</Button>
          </CardBody>
        </Card>
      </div>
    )
}

export default Job;