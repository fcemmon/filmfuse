import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import DropdownMenu from 'react-dd-menu'

import { inject, observer } from 'mobx-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import JoinForm from './components/JoinForm'
import CurrentUser from './components/CurrentUser'
import LoginForm from './components/LoginForm'
import LogoutButton from './components/LogoutButton'

import Home from './components/Home'
import About from './components/About';
import Account from './components/Account'

@inject('routing', 'authStore')
@observer
class UserDD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    }
  }

  toggle = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  close = () => {
    this.setState({ isMenuOpen: false });
  }

  click = () => {
    console.log('You clicked an item');
  }

  logout() {
    console.log('time to log out');
    this.props.authStore.logout();
  }

  render() {
    let menuOptions = {
      isOpen: this.state.isMenuOpen,
      close: this.close.bind(this),
      toggle: (
        <a href="#" onClick={this.toggle.bind(this)}>
          {this.props.authStore.user.name}
        </a>
      ),
      align: 'right'
    }
    return (
      <DropdownMenu {...menuOptions}>
        <li><a href="#">Example 1</a></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/account">Account</Link></li>
        <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
      </DropdownMenu>
    )
  }
}
const AnonLinks = () => (
  <div className={css(styles.anonLinks)}>
    <div><Link to="/join">Join</Link></div>
    <div><Link to="/login">Login</Link></div>
  </div>
)

const Links = props => {
  console.log('propz');
  console.log(props);
  if (props.isLoggedIn) {
    return <UserDD />;
  } else {
    return <AnonLinks />;
  }
}

@inject('routing', 'authStore')
@observer
export default class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (!this.props.authStore.isLoggedIn) {
      this.props.authStore.check()
    }
  }

  render() {
    const { location, push, goBack } = this.props.routing
    let isLoggedIn = this.props.authStore.isLoggedIn

    return (
      <div>
        <div className={css(styles.top)}>
          <div className={css(styles.topNav)}>
            <div><Link to="/home">Film Fuse</Link></div>
            <div><Links isLoggedIn={isLoggedIn} /></div>
          </div>
        </div>
        <div className={css(styles.mid)}>
          <Route path="/join" component={JoinForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/home" component={Home} />
          <Route path="/account" component={Account} />
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#ececec',
    padding: '5px 0'
  },
  topNav: {
    margin: '0 auto',
    width: 900,
    display: 'flex',
    justifyContent: 'space-between'
  },
  mid: {
    margin: '10 auto',
    width: 900
  },
  anonLinks: {
    display: 'flex'
  }
})
