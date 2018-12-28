import styled from 'styled-components';
import { default as UnstyledNavMenu } from './Menu';

export const Container = styled.header`
  display: grid;
  grid-template-columns: 10rem max-content;
  grid-column-gap: 64px;
  align-content: center;
  padding: 0 16px;
`;

export const LogoContainer = styled.img`
  align-self: center;
  max-width: 10rem;
`;

export const NavMenu = styled(UnstyledNavMenu)``;
