import { observable, computed } from 'mobx';

class RegistrationStore {
  @observer user;

  constructor(){
    this.user = null;
  }

  @computed get isValid() {
    return !!this.user;
  }

  register() {
    console.log("Register new user");
    // send basic fields
    // respond with error or sucess (w new user info)
  }
}

const registrationStore = new RegistrationStore();

export default registrationStore;
