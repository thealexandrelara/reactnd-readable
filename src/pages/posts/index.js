import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PostsActions } from '../../store/ducks/posts';

import { Container, LoadingContainer } from './styles';

import { getCategoryFromUrlPath } from '../../utils/categories';

import Categories from '../../components/Categories';
import PostsList from '../../components/PostsList';
import Loading from '../../components/Loading';

class Posts extends PureComponent {
  static propTypes = {
    loadingCategories: PropTypes.bool.isRequired,
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
      }),
    ),
    match: PropTypes.shape({
      path: PropTypes.string,
    }).isRequired,
  };

  static defaultProps = {
    categories: [],
  };

  state = {
    sortBy: 'timestamp',
    orderBy: 'desc',
    searchTerm: '',
  };

  updateSearchTerm = _.debounce(e => {
    const { value } = e.target;
    this.setState(() => ({
      searchTerm: value,
    }));
  }, 300);

  handleSearchInputChange = e => {
    e.persist();

    this.updateSearchTerm(e);
  };

  handleFilterChange = value => {
    this.setState(() => ({
      sortBy: value,
    }));
  };

  render() {
    const { sortBy, orderBy, searchTerm } = this.state;
    const { loadingCategories, categories, match } = this.props;
    const currentCategory = getCategoryFromUrlPath(match);

    if (loadingCategories || !categories) {
      return (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      );
    }

    return (
      <Container>
        <Categories categories={categories} currentCategory={currentCategory} />
        <PostsList
          category={currentCategory}
          sortBy={sortBy}
          orderBy={orderBy}
          searchTerm={searchTerm}
          handleFilterChange={this.handleFilterChange}
          handleSearchInputChange={this.handleSearchInputChange}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.data,
  loadingCategories: state.categories.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PostsActions, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Posts),
);
