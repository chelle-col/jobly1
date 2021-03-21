import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import capitalize from './capitalize';

const InputGroup = ({ name, type, errors, handleChange, userData }) => {
    const error = errors.filter( e => e.name === name);
    
    return (
        <FormGroup className='mx-3 text-left'>
            <Label for={name}>{capitalize(name)}</Label>
            <Input type={type}
                onChange={handleChange}
                value={userData}
                placeholder={capitalize(name)}
                name={name} />
            { error[0] && <span className='text-danger'>{capitalize(error[0].message)}</span> }
        </FormGroup>
    )
}

export default InputGroup;