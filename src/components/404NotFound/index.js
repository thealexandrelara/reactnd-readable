import React from 'react';

import notFoundImage from '../../assets/images/notFound.svg';
import { Container } from './styles';

const NotFound = () => (
  <Container>
    <img src={notFoundImage} alt="404 Not Found" width={200} />
    <p style={{ marginTop: 12 }}>This page got abducted and cannot be found.</p>
  </Container>
);

export default NotFound;
