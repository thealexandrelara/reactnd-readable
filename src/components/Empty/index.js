import React from 'react';

import emptyImage from '../../assets/images/empty.svg';
import { Container } from './styles';

const Empty = props => (
  <Container {...props}>
    <img src={emptyImage} alt="Empty" width={200} />
    <p style={{ marginTop: 12 }}>Unfortunately there is nothing here.</p>
  </Container>
);

export default Empty;
