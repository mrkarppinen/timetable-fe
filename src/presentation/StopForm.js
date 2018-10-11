
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 1rem;
    width: 150px;

    input, button {
        margin-bottom: 1rem;
    }

    input {
        text-align: center;
    }
`;


const StopForm = ({onSubmit}) => (
    <Form id="add-form" onSubmit={ onSubmit } >
                    <input type="text" name="stopId"  />
                    <button id="submit-form" type="submit" >Add</button> 
    </Form>
);

StopForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default StopForm;