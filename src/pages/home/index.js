import React from 'react';

import { Container } from './styles';

import Categories from './Categories';
import PostsList from '../../components/PostsList';

const Home = () => (
  <Container>
    <Categories />
    <PostsList />
  </Container>
);

export default Home;
