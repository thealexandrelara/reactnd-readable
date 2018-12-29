import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container } from './styles';
import List from './List';
import Filters from './Filters';
import Empty from '../Empty';

import { Selectors } from '../../store/ducks';
import { Creators as PostsActions } from '../../store/ducks/posts';
import { Creators as CategoriesActions } from '../../store/ducks/categories';

class PostsList extends PureComponent {
  static propTypes = {
    retrievePostsRequest: PropTypes.func.isRequired,
    handleFilterChange: PropTypes.func.isRequired,
    handleSearchInputChange: PropTypes.func.isRequired,
    searchTerm: PropTypes.string.isRequired,
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timestamp: PropTypes.number.isRequired,
        voteScore: PropTypes.number.isRequired,
      }),
    ),
    category: PropTypes.string.isRequired,
  };

  static defaultProps = {
    posts: [],
  };

  componentDidMount() {
    const { retrievePostsRequest, category } = this.props;

    retrievePostsRequest(category);
  }

  componentDidUpdate(prevProps) {
    const { retrievePostsRequest, category } = this.props;

    if (prevProps.category !== category) {
      retrievePostsRequest(category);
    }
  }

  render() {
    const {
      handleFilterChange,
      handleSearchInputChange,
      posts,
      searchTerm,
    } = this.props;

    if (!posts.length && !searchTerm) {
      return <Empty />;
    }

    return (
      <Container>
        <Filters
          handleChange={handleFilterChange}
          handleSearchInputChange={handleSearchInputChange}
        />
        {!posts.length && searchTerm && <Empty style={{ marginTop: 16 }} />}
        <List posts={posts} />
      </Container>
    );
  }
}

const mapStateToProps = (state, { category, sortBy, orderBy, searchTerm }) => ({
  // Get visible posts based on filters and search terms
  posts: Selectors.posts.getVisiblePosts(
    state,
    category,
    sortBy,
    orderBy,
    searchTerm,
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...CategoriesActions, ...PostsActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsList);
