import React, { Fragment } from 'react';

import Home from './pages/home';
import { Container, Content } from './styles/components';
import GlobalStyles from './styles/global';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

const App = () => (
  <Fragment>
    <GlobalStyles />
    <Container>
      <Header />
      <Content>
        <Home />
      </Content>
      <Sidebar />
      <Footer />
    </Container>
  </Fragment>
);

export default App;
