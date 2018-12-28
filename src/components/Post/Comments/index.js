import React from 'react';
import PropTypes from 'prop-types';
import { Timeline } from 'antd';

import { Container } from './styles';
import AddComment from './AddComment';
import Comment from './Comment';

const Comments = ({ comments, postId, ...rest }) => (
  <Container {...rest}>
    <AddComment postId={postId} />
    <Timeline>
      {comments &&
        comments.map(comment => (
          <Timeline.Item key={comment.id}>
            <Comment {...comment} />
          </Timeline.Item>
        ))}
    </Timeline>
  </Container>
);

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timestamp: PropTypes.number.isRequired,
    }),
  ),
};

Comments.defaultProps = {
  comments: [],
};

export default Comments;
