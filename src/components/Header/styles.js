import styled from 'styled-components';

export const Container = styled.header`
  display: grid;
  grid-template-columns: 1fr 960px 1fr;
  grid-template-rows: max-content;
  background-color: white;
  align-items: center;
`;

export const Content = styled.header`
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: end;
  grid-column: 2;
`;
