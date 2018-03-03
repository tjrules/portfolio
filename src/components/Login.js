import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import Header from './Header';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            username: '',
            password: '',
            loggedIn: false,
            fireRedirect: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };
    
    handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })
    };
    
    handleSubmit(e) {
        e.preventDefault();
        axios.post('/auth/login', {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        })
        .then(d=>{
            this.setState({
                loggedIn:true,
                fireRedirect: true
            })
        })
            .catch(err =>{
            console.log('something wrong with handle submit in login', err);
            e.target.reset();
        });
    };
    
    render() {
        return(
            <div className="container">
                <Nav />
                <h1 class="jumbotron">Welcome TJ please login to your account.</h1>
                <div class="row">
                    <div class="col-md-12 text-center">
                        <form action="/auth/login" onSubmit={this.handleSubmit} id="login-form" method="post" role="form">
                            <div class="form-group">
                                <input type="text" onChange={this.handleChange} name="username" id="username" tabindex="1" class="form-control" placeholder="username"/>
                            </div>
                            <div class="form-group">
                                <input type="text" onChange={this.handleChange} name="password" id="password" tabindex="2" class="form-control" placeholder="password"/>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-sm-6 col-sm-offset-3">
                                        <input type="submit" onChange={this.handleChange} name="login-submit" id="login-submit" tabindex="3" class="form-control btn btn-login" value="Login"/>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="text-center">
                                            <a href="/auth/register">Register</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {this.state.fireRedirect ? <Redirect to="/admin"/> : '' }
            </div>  
        )
    }

};

export default Login;