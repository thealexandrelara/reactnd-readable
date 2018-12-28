import styled from 'styled-components';
import { Icon as UnstyledIcon } from 'antd';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(UnstyledIcon)`
  -webkit-transition: color 0.25s ease-in; //for chrome, safari
  -moz-transition: color 0.25s ease-in; //for mozilla firefox
  -o-transition: color 0.25s ease-in; //for opera
`;

export const VoteCount = styled.p`
  font-weight: bold;
  color: #fb3b23;
  margin: 0;
`;
