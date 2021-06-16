import React from 'react';
import PropTypes from 'prop-types';
import { BsEyeSlashFill } from 'react-icons/bs';
import { BiSlider } from 'react-icons/bi';

import './DropDownOptions.scss';

const DropDownOptions = ({ handleHideClick, closeModals, ...props }) => {
  return (
    <>
      <div
        className="modal-backdrop"
        onClick={closeModals}
        onKeyPress={() => {}}
        role="presentation"
      />
      <div
        {...props}
        onClick={(e) => {
          e.stopPropagation();
        }}
        onKeyPress={() => {}}
        role="presentation"
      >
        <ul className="ddo-options__list">
          <li className="ddo-options__list-item" key={1}>
            <button type="button" onClick={handleHideClick}>
              <BsEyeSlashFill className="ddo-options__list-item__icon" />
              Hide
            </button>
          </li>
          <li className="ddo-options__list-item" key={2}>
            <button type="button">
              <BiSlider className="ddo-options__list-item__icon" />
              Improve my feed
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

DropDownOptions.propTypes = {
  handleHideClick: PropTypes.func.isRequired,
  closeModals: PropTypes.func.isRequired,
};

export default DropDownOptions;
