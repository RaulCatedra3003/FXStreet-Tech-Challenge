import React from 'react';
import PropTypes from 'prop-types';
import { FiClock, FiHeart, FiBookmark, FiMoreHorizontal } from 'react-icons/fi';
import { HiOutlineDocumentSearch } from 'react-icons/hi';

import './PostCard.scss';

export const PostCard = ({ post, ...props }) => {
  const date = new Date(post.publicationTime);
  const stringDate = date.toDateString().split(' ');
  const finalDateString = `${stringDate[1]} ${
    stringDate[2]
  }, ${date.getUTCHours()}:${date.getUTCMinutes()}`;

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
        <div
          className="post-body__content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        {post.imageUrl && (
          <img src={post.imageUrl} alt="post" className="post-body__img" />
        )}
      </div>
      <div className="post-options">
        <button type="button" className="post-options__like">
          <FiHeart className="post-options__like-icon" />
          Like
        </button>
        <button type="button" className="post-options__save">
          <FiBookmark className="post-options__save-icon" />
          Save
        </button>
        <button type="button" className="post-options__menu">
          <FiMoreHorizontal className="post-options__menu-icon" />
        </button>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};
