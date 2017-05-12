import React from 'react';
import {observer} from 'mobx-react';

import authStore from '../stores/AuthStore';

@observer
export default class CurrentUser2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      let id = "No  user id";
      if(authStore.isLoggedIn) {
        id = authStore.user.id;
      }
    return (
      <span>
          Current user id: {id}
      </span>
    );
  }
}
