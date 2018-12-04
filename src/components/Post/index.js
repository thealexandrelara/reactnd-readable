import React from 'react';

import {
  Container,
  Card,
  Image,
  Title,
  HeaderContainer,
  AuthorName,
  Footer,
  Votes,
  Divider,
  Comment,
} from './styles';

const Post = () => (
  <Container>
    <Card bordered={false} style={{ borderRadius: 5 }}>
      <Image src="https://picsum.photos/200" />
      <HeaderContainer>
        <AuthorName>Author name</AuthorName>
      </HeaderContainer>
      <Title>My post</Title>
      <Footer />
      <Votes>Teset</Votes>
      {/* <Divider /> */}
      {/* <Comment>Teste</Comment>
      <Comment>Teste2</Comment>
      <Comment>Teste3</Comment> */}
      {/* <div>image</div>
      <div>Category</div>
      <div>User</div>
      <div>PostTitle</div>
      <div>Small description</div>
      <div>Date/hour</div>
      <div>Comments Number</div>
      <div>Post count</div>
      <div>Favourite</div> */}
    </Card>
  </Container>
);
export default Post;
