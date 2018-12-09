import styled from 'styled-components';
import { Divider as UnstyledDivider } from 'antd';
import { default as UnstyledVotes } from './Votes';

export const Container = styled.article`
  display: grid;
  margin: 4px;
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-template-rows: 30px max-content;
  grid-column-gap: 4px;
  justify-content: start;
  /* background: white; */

  .ant-card-body {
    padding: 0;
  }
`;

export const HeaderContainer = styled.div`
  grid-row: 1;
  grid-column: 3;
  display: flex;
  align-items: center;
`;

export const Votes = styled(UnstyledVotes)`
  grid-column: 1;
  grid-row: span 3;
  align-self: start;
`;

export const AuthorName = styled.span`
  font-size: 0.7rem;
  margin: 0;
  color: #fb3b23;
`;

export const Stats = styled.span`
  font-size: 0.7rem;
  margin-left: 8px;
  color: darkgray;
`;

export const Message = styled.h1`
  font-size: 0.9rem;
  grid-row: 2;
  grid-column: 3;
`;

export const Divider = styled(UnstyledDivider)`
  grid-column: span 3;
  padding: 0 16px;
`;
