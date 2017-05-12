import { observable } from 'mobx';

class HelloStore {
    @observable hello = 'world';
}

const helloStore = new HelloStore();

export default helloStore;
