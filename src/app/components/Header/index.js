import React from 'react';
import './index.scss';

import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Header() {
  return (
    <div className="Header">
      <Logo />
      <Link size="small" to="/login">
        Sign in
      </Link>
    </div>
  );
}

export default Header;
