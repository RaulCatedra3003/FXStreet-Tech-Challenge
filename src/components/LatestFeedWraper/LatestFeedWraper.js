import React from 'react';
import PropTypes from 'prop-types';

import './LatestFeedWraper.scss';

export const LatestFeedWraper = ({ posts }) => {
  return (
    <div className="latest-feed-wraper">
      {posts.map((post) => {
        if (!post.isPopular) {
          return (
            <div key={post.id} className="latest-feed-wraper-item">
              {post.id}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

LatestFeedWraper.propTypes = {
  posts: PropTypes.array.isRequired,
};
