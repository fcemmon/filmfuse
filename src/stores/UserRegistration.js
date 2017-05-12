import { computed, observable } from 'mobx';
import fetch from 'isomorphoc-fetch';

export class UserRegistration {
  @observable name;
  @observable username;
  @observable email;
  @observable password;
  @observable isValid;
  @observable errorMsg;

  constructor(name, username, email, password) {
    this.name = name;
    this.username = name;
    this.email = name;
    this.password = name;
  }

  checkValidity() {
    // fetch from the server
    // return 0 or 1
    return 1;
  }
}

const apiResponse = {
  status: "success",
  data: {
    "message": "Open"
  }
}
  
