import React from 'react';

import './Sidebar.scss';

import logo from '../../utils/img/logo.png';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={logo} alt="logo" className="sidebar__img" />
      <div className="sidebar__items">
        <div className="sidebar__items-item" />
        <div className="sidebar__items-item" />
        <div className="sidebar__items-item" />
        <div className="sidebar__items-item" />
        <div className="sidebar__items-item" />
      </div>
    </div>
  );
};
