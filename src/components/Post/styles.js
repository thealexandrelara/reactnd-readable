import styled from 'styled-components';
import { Divider as UnstyledDivider } from 'antd';

import { default as UnstyledFooter } from './Footer';
import { default as UnstyledVotes } from './Votes';

export const Container = styled.article`
  display: grid;
  margin: 16px;
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 50px;
  grid-template-rows: 30px 90px 30px auto;
  grid-column-gap: 8px;
  justify-content: start;
  background: white;

  -webkit-box-shadow: 1px 11px 35px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 1px 11px 35px 5px rgba(0, 0, 0, 0.1);

  .ant-card-body {
    padding: 0;
  }
`;

export const Image = styled.img`
  grid-row: span 3;
  grid-column: 1;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  height: 150px;
`;

export const HeaderContainer = styled.div`
  grid-row: 1;
  grid-column: 2;
  display: flex;
  align-items: center;
`;

export const AuthorName = styled.p`
  margin: 0;
  color: #fb3b23;
`;

export const Title = styled.h1`
  font-size: 18px;
  grid-row: 2;
  grid-column: 2;
`;

export const Footer = styled(UnstyledFooter)`
  grid-column: 2;
  grid-row: 3;
`;

export const Votes = styled(UnstyledVotes)`
  grid-column: 3;
  grid-row: span 3;
  align-self: center;
`;

export const Divider = styled(UnstyledDivider)`
  grid-column: span 3;
  padding: 0 16px;
`;

export const Comment = styled.div`
  grid-column: span 3;
`;
