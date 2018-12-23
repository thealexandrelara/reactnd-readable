import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PostsActions } from '../../store/ducks/posts';
import { Creators as CommentsActions } from '../../store/ducks/comments';
import { Selectors } from '../../store/ducks';

import { Container } from './styles';

import { getCategoryFromUrlPath } from '../../utils/categories';

import Categories from '../../components/Categories';
import Post from '../../components/Post';

class PostDetail extends PureComponent {
  componentDidMount() {
    const {
      retrieveSinglePostRequest,
      retrieveCommentsRequest,
      match,
    } = this.props;

    console.log(match);

    retrieveSinglePostRequest(match.params.postId, match.params.categoryId);
    retrieveCommentsRequest(match.params.postId);
  }

  render() {
    const {
      loadingCategories,
      categories,
      match,
      post,
      postComments,
    } = this.props;
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
        {post && <Post {...post} comments={postComments} isSingle />}
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { match } = ownProps;
  console.log('postDetailState: ', state);

  return {
    post: match.params.postId
      ? Selectors.posts.getSinglePost(state, match.params.postId)
      : undefined,
    postComments: match.params.postId
      ? Selectors.comments.getVisibleComments(state, match.params.postId)
      : undefined,
    categories: state.categories.data,
    loadingCategories: state.categories.loading,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...PostsActions, ...CommentsActions }, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PostDetail),
);
