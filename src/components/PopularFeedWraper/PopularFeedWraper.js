import React from 'react';
import PropTypes from 'prop-types';

import './PopularFeedWraper.scss';

export const PopularFeedWraper = ({ posts }) => {
  return (
    <div className="popular-feed-wraper">
      {posts.map((post) => {
        if (post.isPopular) {
          return (
            <div key={post.id} className="popular-feed-wraper-item">
              {post.id}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

PopularFeedWraper.propTypes = {
  posts: PropTypes.array.isRequired,
};
