import React, { useState, useCallback } from 'react';
import './index.scss';

import { withRouter } from 'react-router-dom';

import Button from '../components/Button';

export function Login({ history }) {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  let signIn = useCallback(async (e) => {
    e.preventDefault();
    await fetch('https://academy-video-api.herokuapp.com/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username: emailInput,
        password: passwordInput,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res.json();
      })
      .then((response) => {
        localStorage.setItem('token', response.token);
        history.replace('/content/items');
      })
      .catch(console.log('Incorrect email or password'));
  });

  let setEmail = (e) => {
    setEmailInput(e.target.value);
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
export default withRouter(Login);
