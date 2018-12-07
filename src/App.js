import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Container, Content, Sidebar, HeaderContentBackground } from './styles/components';
import GlobalStyles from './styles/global';

import './styles/App.css';
import Header from './components/Header';

import Routes from './routes/routes';

const App = () => (
  <Fragment>
    <GlobalStyles />

    <BrowserRouter>
      <Container>
        {/* <Sidebar /> */}
        {/* <Header /> */}
        <HeaderContentBackground></HeaderContentBackground>
        <Content>
          <Routes />
        </Content>
      </Container>
    </BrowserRouter>
  </Fragment>
);

export default App;
