import React from 'react';
import {observer, inject} from 'mobx-react';
import {Redirect} from 'react-router-dom';

@inject('authStore', 'routing')
@observer
export default class Account extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(!this.props.authStore.isLoggedIn) {
            return (
                <Redirect to='/login'/>
            )
        }
        const user = this.props.authStore.user;
        console.log(user);
        return (
            <div>
                User ID: {user.id}<br />
                Username: {user.username} <br/>
                E-mail: {user.email}<br />
                Name: {user.name}<br />
                Bio: {user.bio}
            </div>
        );
    }
}
