import React from 'react';
import PropTypes from 'prop-types';
import Storage from '../services/storage';
import styled from 'styled-components';
import StopForm from './StopForm';

const Button = styled.button`
    width: 100px;
    height: 40px;
    background: none;
    border: 1px solid #ccc;
    border-radius: 10px;
    color: #ccc;
    font-size: 1.5rem;

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
                {  this.state.displayForm && <StopForm onSubmit={ this.onSubmit } /> }
            </div>
            );
    }

};
