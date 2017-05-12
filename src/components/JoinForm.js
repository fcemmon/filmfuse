import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { observer } from 'mobx-react';

import authStore from '../stores/AuthStore';

@observer
export default class JoinForm extends Component {

  constructor (props) {
    super(props);
    this.state = {
      isValid: false,
      username: 'tyler',
      email: 'tylerwaitt@gmail.cim',
      password: 'test1234',
      id: ''
    };
    this.joinHandler = this.joinHandler.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleUsername(e) {
    this.setState({username: e.target.value});
  }

  handleEmail(e) {
    this.setState({email: e.target.value});
  }
  
  handlePassword(e) {
    this.setState({password: e.target.value});
  }

  joinHandler() {
    const data = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }
    fetch('/api/join', {
      method: 'post',
        credentials: 'include',
        body: JSON.stringify(data)
    })
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        console.log(json);
        if(json.status === 'success'){
          authStore.user = JSON.parse(json.data);
        }
      });
  }

  render() {
    let isValidMsg = "Keep trying";
    if(this.state.isValid) {
      isValidMsg = "Good to go";
    }
    if(authStore.isLoggedIn)
        return <div>Logged in</div>
    return (
      <div>
        <h2>Join</h2>
        {isValidMsg}
        <br />
        {this.state.username}
        <br />
        id: {this.state.id}
        <br />
        <div>Username: <input type="text" value={this.state.username} onChange={this.handleUsername} /></div>
        <div>Email: <input type="text" value={this.state.email} onChange={this.handleEmail} /></div>
        <div>Password: <input type="text" value={this.state.password} onChange={this.handlePassword} /></div>
        <button onClick={this.joinHandler}>Join</button>
      </div>
    );
  }

};

