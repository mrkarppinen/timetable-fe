
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
        border: none;
        border-bottom: 1px solid #ccc;
    }
`;

const AddButton = styled.button`
    background: none;
    /*border: 1px solid #ccc;
    border-radius: 15px;*/
    border: none;
    padding: 1rem;

    :focus {
        outline: none;
    }
`;


const StopForm = ({onSubmit}) => (
    <Form id="add-form" onSubmit={ onSubmit } >
                    <input type="text" name="stopId"  />
                    <AddButton id="submit-form" type="submit" >Add</AddButton> 
    </Form>
);

StopForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default StopForm;