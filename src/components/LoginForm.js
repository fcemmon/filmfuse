import React from 'react';
import { observer, inject } from 'mobx-react';
import {Redirect} from 'react-router-dom';

@inject('authStore', 'routing')
@observer
export default class LoginForm extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.loginHandler = this.loginHandler.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    handleEmail(e) {
        this.setState({email: e.target.value});
    }

    handlePassword(e) {
        this.setState({password: e.target.value});
    }

    loginHandler(e)  {
        this.props.authStore.login(this.state.email, this.state.password);
    };

    render() {
        console.log("routing")
        console.log(this.props.routing)
        if(this.props.authStore.isLoggedIn) {
            return (
                <Redirect to='/account'/>
            )
        }
        return (
            <div>
                <div><input type="text" value={this.state.email} onChange={this.handleEmail} placeholder="email"/></div>
                <div><input type="password" value={this.state.password} onChange={this.handlePassword}
                            placeholder="password"/></div>
                <button onClick={this.loginHandler}>Login</button>
            </div>
        );
    }
};


