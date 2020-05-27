import React from 'react';
import './index.css';

import Logo from '../Logo';
import SmallButton from '../buttons/SmallButton';

function Header() {
  return (
    <div className="Header">
      <Logo />
      <SmallButton>Sign in</SmallButton>
    </div>
  );
}

export default Header;
