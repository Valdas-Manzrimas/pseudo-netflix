import React from 'react';
import './index.scss';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <span>F</span>
      <Link size="small" to="/login">
        Sign in
      </Link>
    </div>
  );
}

export default Header;
