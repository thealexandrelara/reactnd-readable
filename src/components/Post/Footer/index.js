import React from 'react';
import { Container } from './styles';
import Info from './Info';

const Footer = ({ ...rest }) => (
  <Container {...rest}>
    <Info iconName="clock-circle" text="4 horas atrás" />
    <Info iconName="message" text="17 comentários" />
  </Container>
);

export default Footer;
