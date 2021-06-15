import React from 'react';
import PropTypes from 'prop-types';

import './PopularFeedWraper.scss';

import PostCard from '../PostCard';

export const PopularFeedWraper = ({ posts }) => {
  return (
    <div className="popular-feed-wraper">
      {posts.map((post) => {
        if (post.isPopular) {
          return (
            <PostCard
              key={post.id}
              className="popular-feed-wraper-item"
              post={post}
            />
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
