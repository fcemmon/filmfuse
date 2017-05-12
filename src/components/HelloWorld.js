import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject("helloStore")
@observer
class HelloWorld extends Component {



  render() {
      const { hello } = this.props.helloStore;

      return (
      <div>
        Msg: {hello}
      </div>
    );
  }

};

export default HelloWorld;
