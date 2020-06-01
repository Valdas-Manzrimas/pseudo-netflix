import React from 'react';
import './index.css';

import { Link, useHistory, useLocation } from 'react-router-dom';

function Button({ children, size, onClick, ...props }) {
  // const history = useHistory();
  // const location = useLocation();

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
