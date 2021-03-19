import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import capitalize from './capitalize';

const InputGroup = ({ name, type, errors, errorMessage, handleChange, userData }) => {

    return (
        <FormGroup className='mx-3 text-left'>
            <Label for={name}>{capitalize(name)}</Label>
            <Input type={type}
                onChange={handleChange}
                value={userData}
                placeholder={capitalize(name)}
                name={name} />
            { errors.includes(name) && errorMessage }
        </FormGroup>
    )
}

export default InputGroup;