import { observable, computed } from 'mobx';
import { browserHistory } from 'react-router'

// Example
// http://stackoverflow.com/questions/35850871/how-to-connect-state-to-props-with-mobx-js-observer-when-use-es6-class/36164488#36164488

class AuthStore {
    @observable user;
    @observable fetched = 'no';

  @computed get isLoggedIn() {
    return !!this.user;
  }

  constructor() {
    this.user = null;
  }

  login(email, password) {
      const data = {email: email, password: password}

      fetch('/api/login', {
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
                  this.user = JSON.parse(json.data);
              }
          });
  }

  check() {
      // check to see if we are logged in or not
      fetch('/api/whoami', {
          credentials: 'same-origin'
      })
          .then((response) => {
              return response.json();
          })
          .then((json) => {
              console.log('Getting current user');
              console.log(json);
              if(json.status === 'success'){
                  this.user = JSON.parse(json.data);
              }
          });
  }

  logout() {
      this.user = null;
      fetch('/api/logout', {
          credentials: 'same-origin'
      })
          .then((response) => {
              return response.json();
          })
          .then((json) => {
              console.log(json);
              if(json.status === 'success'){
                  // let user = json.data;
                  // this.setState({
                  //     userId: user.id
                  // });
              }
          });
  }

}

const authStore = new AuthStore();

export default authStore;
