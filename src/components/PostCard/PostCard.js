import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FiClock, FiHeart, FiBookmark, FiMoreHorizontal } from 'react-icons/fi';
import { HiOutlineDocumentSearch } from 'react-icons/hi';
import { FaHeart, FaBookmark } from 'react-icons/fa';
import parse from 'react-html-parser';

import './PostCard.scss';

import DropDownOptions from '../DropDownOptions/DropDownOptions';
import DropDownForm from '../DropDownForm/DropDownForm';

export const PostCard = ({ post, ...props }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalInFormStage, setIsModalInFormStage] = useState(false);

  const date = new Date(post.publicationTime);
  const stringDate = date.toDateString().split(' ');
  const finalDateString = `${stringDate[1]} ${
    stringDate[2]
  }, ${date.getUTCHours()}:${date.getUTCMinutes()}`;

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleHideClick = () => {
    setIsModalInFormStage(true);
  };

  const closeFormModal = () => {
    setIsModalInFormStage(false);
  };

  const closeModals = () => {
    setIsModalInFormStage(false);
    setIsModalOpen(false);
  };

  return (
    <div {...props}>
      <div className="post-head">
        <div className="post-head__info">
          <div className="post-head__info-category">
            <div className="post-head__info-category-feed">
              <HiOutlineDocumentSearch className="post-head__info-category-feed-icon" />
              {post.feed}
            </div>
            <div className="post-head__info-category-subfeed">
              {post.subFeed}
            </div>
          </div>
          <div className="post-head__info-time">
            <FiClock className="post-head__info-time-icon" />
            <div className="post-head__info-time-date">{finalDateString}</div>
          </div>
        </div>
        <div className="post-head__title">
          <div className="post-head__title-author">
            <div className="post-head__title-author-name">
              {post.author.name}
            </div>
            <div className="post-head__title-author-separator" />
            <div className="post-head__title-author-company">
              {post.author.companyName}
            </div>
          </div>
          <div className="post-head__title-enun">
            <div className="post-head__title-enun__image">
              <img src={post.author.imageUrl} alt="user profile" />
            </div>
            <div className="post-head__title-enun__title">{post.title}</div>
          </div>
        </div>
      </div>
      <div className="post-separator" />
      <div className="post-body">
        <div className="post-body__content">{parse(post.content)}</div>
        {post.imageUrl && (
          <img src={post.imageUrl} alt="post" className="post-body__img" />
        )}
      </div>
      <div className="post-options">
        {liked ? (
          <button
            type="button"
            className="post-options__like liked"
            onClick={handleLike}
          >
            <FaHeart className="post-options__like-icon" />
            Liked!
          </button>
        ) : (
          <button
            type="button"
            className="post-options__like"
            onClick={handleLike}
          >
            <FiHeart className="post-options__like-icon" />
            Like
          </button>
        )}
        {saved ? (
          <button
            type="button"
            className="post-options__save saved"
            onClick={handleSave}
          >
            <FaBookmark className="post-options__save-icon" />
            Saved!
          </button>
        ) : (
          <button
            type="button"
            className="post-options__save"
            onClick={handleSave}
          >
            <FiBookmark className="post-options__save-icon" />
            Save
          </button>
        )}
        <button
          type="button"
          className="post-options__menu"
          onClick={handleOpenModal}
        >
          <FiMoreHorizontal className="post-options__menu-icon" />
        </button>
      </div>
      {isModalOpen ? (
        isModalInFormStage ? (
          <DropDownForm
            handleClose={closeFormModal}
            closeModals={closeModals}
            className="ddForm"
          />
        ) : (
          <DropDownOptions
            handleHideClick={handleHideClick}
            closeModals={closeModals}
            className="ddOptions"
          />
        )
      ) : null}
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};
