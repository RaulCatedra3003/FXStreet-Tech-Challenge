import React from 'react';
import { FiFilter } from 'react-icons/fi';
import PropTypes from 'prop-types';

import './FeedNavBar.scss';

export const FeedNavBar = ({ filter, setFilter }) => {
  const handleClick = (e) => {
    setFilter(e.target.id);
  };

  return (
    <div className="feed-nav-bar">
      <div className="feed-nav-bar__buttons">
        <button
          type="button"
          id="latest"
          className={
            filter === 'latest'
              ? 'feed-nav-bar__buttons-item active'
              : 'feed-nav-bar__buttons-item'
          }
          onClick={handleClick}
        >
          Latest
        </button>
        <button
          type="button"
          id="popular"
          className={
            filter === 'popular'
              ? 'feed-nav-bar__buttons-item active'
              : 'feed-nav-bar__buttons-item'
          }
          onClick={handleClick}
        >
          Popular
        </button>
      </div>
      <div className="feed-nav-bar__filter">
        <FiFilter className="feed-nav-bar__filter-item" />
      </div>
    </div>
  );
};

FeedNavBar.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};
