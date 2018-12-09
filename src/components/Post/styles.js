import styled from 'styled-components';
import { Divider as UnstyledDivider } from 'antd';

import { default as UnstyledFooter } from './Footer';
import { default as UnstyledVotes } from './Votes';
import { default as UnstyledComments } from './Comments';

export const Container = styled.article`
  display: grid;
  margin: 16px;
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: 50px auto 1fr;
  grid-template-rows: 30px 60px 30px auto;
  grid-column-gap: 12px;
  justify-content: start;
  /* background: white; */

  .ant-card-body {
    padding: 0;
  }
`;

export const Image = styled.img`
  align-self: center;
  grid-row: span 3;
  grid-column: 2;
  border-radius: 5px;
  height: 120px;
`;

export const HeaderContainer = styled.div`
  grid-row: 1;
  grid-column: 3;
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
  grid-column: 3;
`;

export const Footer = styled(UnstyledFooter)`
  grid-column: 3;
  grid-row: 3;
`;

export const Body = styled.p`
  margin-top: 16px;
  font-size: 14px;
  grid-row: 4;
  grid-column: 2 / 4;
`;

export const Votes = styled(UnstyledVotes)`
  grid-column: 1;
  grid-row: span 3;
  align-self: center;
`;

export const Divider = styled(UnstyledDivider)`
  grid-column: span 3;
  padding: 0 16px;
`;

export const Comments = styled(UnstyledComments)`
  grid-column: 2 / 4;
`;
