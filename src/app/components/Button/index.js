import React from 'react';
import './index.css';

function Button({ children, size }) {
  const sizeClass = { small: 'button--small', large: 'button--large' }[size];

  return <button className={`Button ${sizeClass}`}> {children} </button>;
}

export default Button;
