import React from 'react';
import PropTypes from 'prop-types';
import Storage from '../services/storage';
import styled from 'styled-components';

const Button = styled.button`
    width: 100px;
    height: 40px;
    background: none;
    /*border: 1px solid #ccc;
    border-radius: 10px;*/
    border: none;
    color: #ccc;
    font-size: 1.5rem;

    :focus{
        outline: none;
    }

`;

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


export default class AddNew extends React.Component {

    static propTypes = {
        onAdd: PropTypes.func.isRequired
    };

    constructor(props){
        super(props);

        this.state = {
            displayForm: false
        };

        this.toggleForm = this.toggleForm.bind(this);
        this.onSubmit  = this.onSubmit.bind(this);
    }

    
    toggleForm(){ this.setState({displayForm: !this.state.displayForm }) };

    onSubmit(event)  { 
        event.preventDefault(); 
        const id = event.target.stopId.value;
        if (id.trim().length > 0){
            this.props.onAdd(id); 
            new Storage().addStop(id);  
        }
        event.target.stopId.value = '';  
        this.toggleForm();

    
    };

    render(){    
        const toggleButtonClass = this.state.displayForm ? 'close-form' : 'open-form';
        const toggleButtonValue = this.state.displayForm ? '-' : '+';

        return (
            <div className="new-form" style={{marginTop: '1rem'}}  >
                <div><Button id={toggleButtonClass} type="button" onClick={ this.toggleForm } >{toggleButtonValue}</Button></div>
                {  this.state.displayForm && <Form id="add-form" onSubmit={ this.onSubmit } autoComplete="off" >
                    <input type="text" name="stopId" placeholder="id" />
                    <AddButton id="submit-form" type="submit" >Add</AddButton> 
                </Form>
                }
            </div>
            );
    }

};
