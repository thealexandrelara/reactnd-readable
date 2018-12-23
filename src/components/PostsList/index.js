import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container } from './styles';
import Post from '../Post';
import Filters from './Filters';

import { Selectors } from '../../store/ducks';
import { Creators as PostsActions } from '../../store/ducks/posts';
import { Creators as CategoriesActions } from '../../store/ducks/categories';

class PostsList extends PureComponent {
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
    const { posts } = this.props;
    return (
      <Container>
        <Filters />
        {posts && posts.map(post => <Post key={post.id} {...post} />)}
      </Container>
    );
  }
}

const mapStateToProps = (state, { category }) => {
  console.log(category);

  return {
    posts: Selectors.posts.getVisiblePosts(state, category),
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...CategoriesActions, ...PostsActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsList);
