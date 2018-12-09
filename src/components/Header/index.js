import React from 'react';

import { Container, LogoContainer, NavMenu } from './styles';
import Logo from '../../assets/images/logo.png';

const Header = () => (
  <Container>
    <LogoContainer src={Logo} alt="Logo" />
    <NavMenu />
  </Container>
);

export default Header;
