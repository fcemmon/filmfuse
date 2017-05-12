import { observable, computed, action } from 'mobx';

const fakeUser = {
  name = "Tyler Waitt",
  username = "tyler",
  bio = "Hack the planet",
  email = "tylerwaitt@gmail.com"
}

export class CurrentUser {
  @observable name;
  @observable username;

  constructor(name, username) {
    this.name = name;
    this.username = username;
  }

  get bigName() {
    return this.name.toUpperCase();
  }

  login(email, password) {
    // check api with email password combo
    // return success (user) or fail (error)
    this.name = fakeUser.name;
    this.username = fakeUser.username;
    this.email = fakeUser.email;
    this.bio = fakeUser.bio;
  }
}

