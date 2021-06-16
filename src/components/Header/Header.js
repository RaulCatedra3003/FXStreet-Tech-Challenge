import React from 'react';

import './Header.scss';

export const Header = () => {
  return (
    <div className="header">
      <div className="header-first">
        <div className="header-first__circle" />
        <div className="header-first__rectangle-blue" />
        <div className="header-first__rectangle-orange" />
      </div>
      <div className="header-buttons">
        <div className="header-buttons-first">
          <div className="header-buttons-first-circle" />
        </div>
        <div className="header-buttons-second">
          <div className="header-buttons-second-circle" />
        </div>
        <div className="header-buttons-third">
          <div className="header-buttons-third-circle" />
          <div className="header-buttons-third-rectangle" />
        </div>
      </div>
    </div>
  );
};
