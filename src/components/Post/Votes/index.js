import React from 'react';
import { Icon } from 'antd';

import { Container, VoteCount } from './styles';

const Votes = ({ ...rest }) => (
  <Container {...rest}>
    <Icon type="caret-up" style={{ fontSize: '1.5rem', color: '#fb3b23' }} />
    <VoteCount>10</VoteCount>
    <Icon type="caret-down" style={{ fontSize: '1.5rem', color: '#c8c8c8' }} />
  </Container>
);

export default Votes;
