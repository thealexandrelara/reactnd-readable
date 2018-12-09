import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import {
  Container,
  Content,
  FooterContainer,
  HeaderContentBackground,
  HeaderContainer
} from './styles/components';
import GlobalStyles from './styles/global';

import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import Routes from './routes/routes';

const App = () => (
  <Fragment>
    <GlobalStyles />

    <BrowserRouter>
      <Container>
        {/* <Sidebar /> */}
        {/* <Header /> */}
        <HeaderContentBackground />
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <Content>
          <Routes />
        </Content>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </Container>
    </BrowserRouter>
  </Fragment>
);

export default App;
