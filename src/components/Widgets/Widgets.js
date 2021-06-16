import React from 'react';

import './Widgets.scss';

export const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets-wraper">
        <div className="widgets-wraper__first-item">
          <div className="widgets-wraper__first-item__rectangle-long" />
          <div className="widgets-wraper__first-item__rectangle-short" />
        </div>
        <div className="widgets-wraper__second-item">
          <div className="widgets-wraper__second-item__rectangle" />
          <div className="widgets-wraper__second-item__circle" />
        </div>
      </div>
    </div>
  );
};
