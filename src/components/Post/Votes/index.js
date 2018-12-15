import React from 'react';
import { Spring } from 'react-spring';
import { Icon } from 'antd';

import { Container, VoteCount } from './styles';

const Votes = ({ voteScore, ...rest }) => (
  <Container {...rest}>
    <Icon type="caret-up" style={{ fontSize: '1.5rem', color: '#fb3b23' }} />
    <VoteCount>
      <Spring
        from={{ number: 0 }}
        to={{ number: voteScore }}
        config={{ precision: 1, friction: 50 }}
      >
        {props => parseInt(props.number)}
      </Spring>
    </VoteCount>
    <Icon type="caret-down" style={{ fontSize: '1.5rem', color: '#c8c8c8' }} />
  </Container>
);

export default Votes;
