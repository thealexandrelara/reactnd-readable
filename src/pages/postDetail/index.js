import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PostsActions } from '../../store/ducks/posts';
import { Creators as CommentsActions } from '../../store/ducks/comments';
import { Selectors } from '../../store/ducks';

import { Container, LoadingContainer } from './styles';

import { getCategoryFromUrlPath } from '../../utils/categories';

import Categories from '../../components/Categories';
import Post from '../../components/Post';
import NotFound from '../../components/404NotFound';
import Loading from '../../components/Loading';

class PostDetail extends PureComponent {
  static propTypes = {
    retrieveSinglePostRequest: PropTypes.func.isRequired,
    retrieveCommentsRequest: PropTypes.func.isRequired,
    loadingCategories: PropTypes.bool.isRequired,
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
    post: PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
    postComments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  static defaultProps = {
    post: undefined,
  };

  componentDidMount() {
    const {
      retrieveSinglePostRequest,
      retrieveCommentsRequest,
      match,
    } = this.props;

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
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      );
    }

    return (
      <Container>
        <Categories categories={categories} currentCategory={currentCategory} />
        {post ? (
          <Post {...post} comments={postComments} isSingle />
        ) : (
          <NotFound />
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { match } = ownProps;

  // Get single post from Redux Store
  let singlePost = Selectors.posts.getSinglePost(state, match.params.postId);

  if (singlePost) {
    singlePost = !singlePost.deleted ? singlePost : undefined;
  }

  return {
    post: match.params.postId ? singlePost : undefined,
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
