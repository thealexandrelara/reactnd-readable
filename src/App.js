import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import { Creators as CategoriesActions } from './store/ducks/categories';

import {
  Container,
  Content,
  FooterContainer,
  HeaderContentBackground,
  HeaderContainer,
} from './styles/components';
import GlobalStyles from './styles/global';

import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import Routes from './routes/routes';

class App extends Component {
  static propTypes = {
    retrieveCategoriesRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { retrieveCategoriesRequest } = this.props;
    retrieveCategoriesRequest();
  }

  render() {
    return (
      <Fragment>
        <GlobalStyles />
        <BrowserRouter>
          <Container>
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
  }
}
const mapStateToProps = state => ({
  categories: state.categories.data,
  loadingCategories: state.categories.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CategoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
