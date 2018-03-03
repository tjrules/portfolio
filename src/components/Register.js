import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import Nav from './Nav';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            username: '',
            password: '',
            loggedInName: '',
            fireRedirect: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handlChange.bind(this);    
    }
    
    handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })
    };

    handleSubmit(e) {
        e.preventDefault();
        axios({
            method: 'POST',
            url: '/auth/register',
            data: {
                email: this.state.email,
                username: this.state.username,
                password: this.state.password
            }
        });
        .then(person => {
            this.setState({
                fireRedirect: true
            })
        });
            .catch(err =>{
            console.log('error at register handle submit', err)
        });
    };
  
    render() {
        return(
        
            
        )
    }
    
};

