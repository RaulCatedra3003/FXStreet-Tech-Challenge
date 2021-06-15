import React from 'react';

import './MobileHeader.scss';

import mobileLogo from '../../utils/img/mobileLogo.png';

export const MobileHeader = () => {
  return (
    <div className="mobile-header">
      <img src={mobileLogo} alt="logo" className="mobile-header__img" />
      <div className="mobile-header__circles">
        <div className="mobile-header__circles-item" />
        <div className="mobile-header__circles-item" />
      </div>
    </div>
  );
};
