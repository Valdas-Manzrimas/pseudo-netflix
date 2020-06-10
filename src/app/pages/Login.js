import React, { useState, useCallback } from 'react';
import './index.scss';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from '../components/Button';

export function Login({ history, setToken }) {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  let signIn = useCallback(async (e) => {
    e.preventDefault();

    try {
      const result = await fetch(
        'https://academy-video-api.herokuapp.com/auth/login',
        {
          method: 'POST',
          body: JSON.stringify({
            username: emailInput,
            password: passwordInput,
          }),
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (!result.ok) {
        throw result.json();
      }

      const json = await result.json();
      console.log('fetch', json);
      localStorage.setItem('token', json.token);
      setToken(json.token);

      history.replace('/content/items');
    } catch {
      console.log('Incorrect email or password');
    }
  });

  let setEmail = (e) => {
    setEmailInput(e.target.value);
    console.log(signIn.token);
  };

  let setPassword = (e) => {
    setPasswordInput(e.target.value);
  };

  return (
    <div className="Login">
      <form onSubmit={signIn}>
        <input type="text" placeholder="Email" onChange={setEmail} />
        <input type="password" placeholder="Password" onChange={setPassword} />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}

function mapStateToProps({ authentication }) {
  return {
    token: authentication.token,
  };
}

function mapDistpatchToProps(dispatch) {
  return { setToken: (token) => dispatch({ type: 'SET_TOKEN', token }) };
}

export default connect(mapStateToProps, mapDistpatchToProps)(withRouter(Login));
