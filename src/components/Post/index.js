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

const Post = () => (
  <Container>
    <Card bordered={false} style={{ borderRadius: 5 }}>
      <Votes>Teset</Votes>
      <Image src="https://picsum.photos/200" />
      <HeaderContainer>
        <Icon type="user" style={{ marginRight: 8, color: '#fb3b23' }} />
        <AuthorName>Author name</AuthorName>
      </HeaderContainer>
      <Title>My post</Title>
      <Footer />
      <Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas odio
        dui, condimentum id dolor maximus, maximus mollis mauris. Fusce in lacus
        sit amet ipsum lacinia malesuada. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Donec at arcu eu
        lorem pellentesque molestie non et erat. Donec porttitor urna a ipsum
        hendrerit, vitae fringilla erat vehicula. Fusce fermentum non quam a
        tempus. Curabitur lobortis pretium risus, nec mattis magna fermentum
        eget. Nam elit massa, placerat dignissim enim et, cursus dignissim
        lacus. Fusce sodales augue vitae elit maximus dictum. Morbi dignissim
        sodales est, eget fringilla elit molestie quis. Quisque auctor
        vestibulum purus, a bibendum orci pellentesque fringilla. Sed fermentum
        odio vitae urna malesuada, quis hendrerit nisi volutpat. Nunc consequat
        cursus sem, ac euismod metus tristique sed. Interdum et malesuada fames
        ac ante ipsum primis in faucibus. Nunc aliquam ipsum eget ligula
        consectetur venenatis. Mauris lacinia semper ipsum, sit amet malesuada
        elit vehicula a. Maecenas id purus eget erat sodales viverra eu a dui.
        Phasellus tincidunt libero at odio interdum facilisis. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.{' '}
      </Body>
      <Comments />
    </Card>
  </Container>
);
export default Post;
