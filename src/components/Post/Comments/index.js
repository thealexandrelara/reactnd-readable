import React from 'react';
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

export default Comments;
