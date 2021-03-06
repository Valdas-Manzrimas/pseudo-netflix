import React from 'react';
import './index.css';

import { Link } from 'react-router-dom';

function Button({ children, size, onClick, ...props }) {
  const sizeClass = { small: 'button--small', large: 'button--large' }[size];
  const Tag = props.to ? Link : props.href ? 'a' : 'button';

  return (
    <Tag className={`Button ${sizeClass}`} onClick={onClick}>
      {' '}
      {children}{' '}
    </Tag>
  );
}

export default Button;
