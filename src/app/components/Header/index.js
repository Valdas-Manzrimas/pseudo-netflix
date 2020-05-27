import React from 'react';
import './index.css';

import Logo from '../Logo';
import Button from '../Button';

function Header() {
  return (
    <div className="Header">
      <Logo />
      <Button size="small">Sign in</Button>
    </div>
  );
}

export default Header;
