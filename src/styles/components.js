import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(auto, 960px) 1fr;
  grid-template-rows: 80px 50px auto 50px;
  height: 100%;

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

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  grid-column: 2;
  grid-row: 1;
`;

export const Content = styled.div`
  grid-column: 2;
  grid-row-start: 2;
  grid-row-end: 4;
  background-color: white;
  border-radius: 3px;

  height: 100%;
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 2;
  grid-row: 4;
`;
