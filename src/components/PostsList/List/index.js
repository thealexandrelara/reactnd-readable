import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Post from '../../Post';

const List = ({ posts }) => (
  <Fragment>
    {posts.map(post => (
      <Post key={post.id} {...post} />
    ))}
  </Fragment>
);

List.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timestamp: PropTypes.number.isRequired,
      commentCount: PropTypes.number.isRequired,
    }),
  ),
};

List.defaultProps = {
  posts: [],
};

export default List;
