import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

import { Container, Text } from './styles';

const Info = ({ iconName, text }) => (
  <Container>
    <Icon type={iconName} />
    <Text>{text}</Text>
  </Container>
);

Info.propTypes = {
  iconName: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element,
  ]).isRequired,
};

export default Info;
