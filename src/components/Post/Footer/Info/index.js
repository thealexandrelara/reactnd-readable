import React from 'react';
import { Icon } from 'antd';

import { Container, Text } from './styles';

const Info = ({ iconName, text }) => (
  <Container>
    <Icon type={iconName} />
    <Text>{text}</Text>
  </Container>
);

export default Info;
