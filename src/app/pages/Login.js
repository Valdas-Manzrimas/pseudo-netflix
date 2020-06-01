import React from 'react';
import './index.scss';

import { withRouter } from 'react-router-dom';

import Button from '../components/Button';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInput: '',
      passwordInput: '',
    };
  }

  signIn = (e) => {
    e.preventDefault();
    fetch('https://academy-video-api.herokuapp.com/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.emailInput,
        password: this.state.passwordInput,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((response) => {
        localStorage.setItem('token', response.token);
        this.props.history('/content'); //linkas kur nukeliausime
      })
      .catch(console.log);
  };

  setEmail = (e) => {
    this.setState({ emailInput: e.target.value });
  };

  setPassword = (e) => {
    this.setState({ passwordInput: e.target.value });
  };

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.signIn}>
          <input type="text" placeholder="Email" onChange={this.setEmail} />
          <input
            type="password"
            placeholder="Password"
            onChange={this.setPassword}
          />
          <Button type="submit">Login</Button>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
