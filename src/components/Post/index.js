import React from 'react';
import { Icon } from 'antd';

import {
  Container,
  Card,
  Image,
  Title,
  HeaderContainer,
  AuthorName,
  Footer,
  Votes,
  Body,
  Comments,
} from './styles';

const Post = ({
  author,
  body,
  category,
  commentCount,
  id,
  title,
  timestamp,
  voteScore,
  isSingle,
}) => (
  <Container>
    <Card bordered={false} style={{ borderRadius: 5 }}>
      <Votes voteScore={voteScore} />
      <Image src="https://picsum.photos/200" />
      <HeaderContainer>
        <Icon type="user" style={{ marginRight: 8, color: '#fb3b23' }} />
        <AuthorName>{author}</AuthorName>
      </HeaderContainer>
      <Title>{title}</Title>
      <Footer timestamp={timestamp} commentCount={commentCount} />
      {isSingle && (
        <>
          <Body>{body}</Body>
          <Comments />
        </>
      )}
    </Card>
  </Container>
);
export default Post;
