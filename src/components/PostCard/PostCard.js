import React from 'react';
import PropTypes from 'prop-types';

import './PostCard.scss';

export const PostCard = ({ post, ...props }) => {
  return <div {...props}>{post.id}</div>;
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};
