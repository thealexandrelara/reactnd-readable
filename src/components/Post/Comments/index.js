import React from 'react';
import { Timeline } from 'antd';

import { Container } from './styles';
import AddComment from './AddComment';
import Comment from './Comment';

const Comments = ({ ...rest }) => (
  <Container {...rest}>
    <AddComment />
    <Timeline>
      <Timeline.Item>
        <Comment />
      </Timeline.Item>
      <Timeline.Item>
        <Comment />
      </Timeline.Item>
      <Timeline.Item>
        <Comment />
      </Timeline.Item>
      <Timeline.Item>
        <Comment />
      </Timeline.Item>
    </Timeline>
  </Container>
);

export default Comments;
