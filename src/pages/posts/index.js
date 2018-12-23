import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PostsActions } from '../../store/ducks/posts';

import { Container } from './styles';

import { getCategoryFromUrlPath } from '../../utils/categories';

import Categories from '../../components/Categories';
import PostsList from '../../components/PostsList';

class Posts extends PureComponent {
  render() {
    const { loadingCategories, categories, match } = this.props;
    const currentCategory = getCategoryFromUrlPath(match);

    if (loadingCategories || !categories) {
      return (
        <Container>
          <div>Loading...</div>
        </Container>
      );
    }

    return (
      <Container>
        <Categories categories={categories} currentCategory={currentCategory} />
        <PostsList category={currentCategory} />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  console.log('categories: ', state.categories.data);

  return {
    categories: state.categories.data,
    loadingCategories: state.categories.loading,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(PostsActions, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Posts),
);
