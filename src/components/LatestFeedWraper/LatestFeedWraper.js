import React from 'react';
import PropTypes from 'prop-types';

import './LatestFeedWraper.scss';
import PostCard from '../PostCard';

export const LatestFeedWraper = ({ posts }) => {
  return (
    <div className="latest-feed-wraper">
      {posts.map((post) => {
        if (!post.isPopular) {
          return (
            <PostCard
              key={post.id}
              className="latest-feed-wraper-item"
              post={post}
            />
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
