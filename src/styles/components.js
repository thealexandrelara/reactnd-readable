import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background-color: #dae0e6;
  display: grid;
  grid-template-columns: 0 repeat(4, 1fr) 0;
  grid-template-rows: 100px;
  gap: 24px 0;
  grid-template-areas:
    'header header header header header header'
    '. content content content content .'
    '. sidebar sidebar sidebar sidebar .'
    '. footer footer footer footer .';

  @media screen and (min-width: 640px) {
    height: 100%;
    background-color: #dae0e6;
    display: grid;
    grid-template-columns: 0 repeat(4, 1fr) 0;
    grid-template-rows: 100px;
    gap: 24px;
    grid-template-areas:
      'header header header header header header'
      '. content content content sidebar .'
      '. content content content footer .';
  }
`;

export const Content = styled.div`
  grid-area: content;
  background-color: white;
`;
