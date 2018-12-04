import styled from 'styled-components';

import UnstyledSidebar from '../components/Sidebar';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 256px 940px 1fr;
  height: 100%;

  @media screen and (min-width: 640px) {
    grid-template-columns: 1fr 256px 940px 1fr;
    height: 100%;
  }
`;

export const Content = styled.div`
  height: 100%;
`;

export const Sidebar = styled(UnstyledSidebar)`
  grid-column: 1;
`;
