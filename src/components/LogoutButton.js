import React from 'react';

import authStore from '../stores/AuthStore';

export default class LogoutButton extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    authStore.logout();
  }

  render() {
    return (
      <button onClick={this.logout}>Logout</button>
    );
  }
}
