import React from 'react';

import {
  Container,
  Card,
  Message,
  HeaderContainer,
  AuthorName,
  Stats,
  Votes,
} from './styles';

const Comment = () => (
  <Container>
    <Card bordered={false} style={{ borderRadius: 5 }}>
      <Votes>Teset</Votes>
      <HeaderContainer>
        <AuthorName>Author name</AuthorName>
        <Stats>7.3k points · 7 hours ago</Stats>
      </HeaderContainer>
      <Message>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis
        eu justo id tristique. Donec quis interdum dolor, vel auctor magna. Nunc
        rhoncus maximus erat, vel scelerisque nulla accumsan quis.{' '}
      </Message>
    </Card>
  </Container>
);
export default Comment;
