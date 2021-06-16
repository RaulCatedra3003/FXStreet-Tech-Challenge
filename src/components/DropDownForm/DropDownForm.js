import React from 'react';
import PropTypes from 'prop-types';
import { BiArrowBack } from 'react-icons/bi';

import './DropDownForm.scss';

const DropDownForm = ({ handleClose, closeModals, ...props }) => {
  const handleSumbit = (e) => {
    e.preventDefautl();
  };

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
        <button type="button" onClick={handleClose} className="ddf-button">
          <BiArrowBack className="ddf-button-icon" />
          Tell us why:
        </button>
        <form className="ddf-form">
          <div className="ddf-form-item">
            <input type="radio" className="ddf-form-item__input" />
            <p className="ddf-form-item__text">
              I&apos;m not intersted in this author
            </p>
          </div>
          <div className="ddf-form-item">
            <input type="radio" className="ddf-form-item__input" />
            <p className="ddf-form-item__text">
              I&apos;m not intersted in this topic
            </p>
          </div>
          <div className="ddf-form-item">
            <input type="radio" className="ddf-form-item__input" />
            <p className="ddf-form-item__text">
              I&apos;ve seen too many posts on this topic
            </p>
          </div>
          <div className="ddf-form-item">
            <input type="radio" className="ddf-form-item__input" />
            <p className="ddf-form-item__text">The information is incorrect</p>
          </div>
          <div className="ddf-form-item">
            <input type="radio" className="ddf-form-item__input" />
            <p className="ddf-form-item__text">
              I&apos;ve seen this post before
            </p>
          </div>
          <div className="ddf-form-item">
            <input type="radio" className="ddf-form-item__input" />
            <p className="ddf-form-item__text">Other reasons</p>
          </div>
          <button
            type="submit"
            onClick={handleSumbit}
            disabled
            className="ddf-form-button"
          >
            Hide content
          </button>
        </form>
      </div>
    </>
  );
};

DropDownForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
  closeModals: PropTypes.func.isRequired,
};

export default DropDownForm;
