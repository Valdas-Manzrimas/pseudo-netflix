import React from 'react';
import './index.scss';

import visa from '../../../assets/visa.png';
import maestro from '../../../assets/maestro.png';
import mastercard from '../../../assets/mastercard.png';
import paypal from '../../../assets/paypal.png';

function Footer({ children }) {
  return (
    <div className="Footer">
      <span>{children}</span>
      <div className="paymentDiv">
        <img src={visa} alt="visa"></img>
        <img src={maestro} alt="maestro"></img>
        <img src={mastercard} alt="mastercard"></img>
        <img src={paypal} alt="paypal"></img>
      </div>
    </div>
  );
}

export default Footer;
