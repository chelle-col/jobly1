import React from 'react';
import { Card, CardTitle, Button, CardText, CardBody } from 'reactstrap';

const Job = ({ job }) => {
  const handleClick = () => {
    console.log('applied');
  }
  return (
    <div>
        <Card className='my-2'>
          <CardBody>
            <CardTitle tag="h5">{job.title}</CardTitle>
            { job.salary != null && <CardText>Salary: {job.salary}</CardText> }
            { job.company != null && <CardText>Company: {job.companyName}</CardText> }
            { job.equity != null && <CardText>Equity: {job.equity}</CardText> }
            <Button style={{background:'crimson'}} onClick={handleClick}>Apply</Button>
          </CardBody>
        </Card>
      </div>
    )
}

export default Job;