import styled from 'styled-components';

import UnstyledSidebar from '../components/Sidebar';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(auto, 1200px) 1fr;
  grid-template-rows: 80px 50px auto;
  height: 100%;
  background-color: #323d64;

  /* @media screen and (min-width: 640px) {
    grid-template-columns: 1fr 1200px 1fr;
    height: 100%;
  } */
`;

export const HeaderContentBackground = styled.div`
 grid-column-start: 1;
 grid-column-end: 4;
 grid-row-start: 1;
 grid-row-end: 3;
  background-color: #151e40;
`;

export const Content = styled.div`
  grid-column: 2;
  grid-row-start: 2;
  grid-row-end: 4;
  background-color: white;
  border-radius: 3px;

  height: 100%;
`;

export const Sidebar = styled(UnstyledSidebar)`
  grid-column: 1;
`;
