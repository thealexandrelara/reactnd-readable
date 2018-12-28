import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PostsActions } from '../../store/ducks/posts';

import {
  Container,
  Card,
  Divider,
  Image,
  Title,
  HeaderContainer,
  AuthorName,
  Footer,
  Votes,
  Body,
  Comments,
  EditPost,
} from './styles';
import reactCategoryThumbnail from '../../assets/images/react-category-transparent.png';
import reduxCategoryThumbnail from '../../assets/images/redux-category-transparent.png';
import udacityCategoryThumbnail from '../../assets/images/udacity-category-transparent.png';

class Post extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    voteInPostRequest: PropTypes.func.isRequired,
    deletePostRequest: PropTypes.func.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    commentCount: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    voteScore: PropTypes.number.isRequired,
    isSingle: PropTypes.bool,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timestamp: PropTypes.number.isRequired,
      }),
    ),
  };

  static defaultProps = {
    isSingle: false,
    comments: [],
  };

  state = {
    isEditing: false,
  };

  handleVote = value => {
    const { id, voteInPostRequest } = this.props;

    voteInPostRequest(id, value);
  };

  handleEdit = value => {
    if (value === 'edit') {
      this.setState(() => ({ isEditing: true }));
    } else {
      this.setState(() => ({ isEditing: false }));
    }
  };

  handleDelete = () => {
    const { id, deletePostRequest } = this.props;

    deletePostRequest(id);
  };

  getThumbnail = () => {
    const { category } = this.props;

    switch (category) {
      case 'react':
        return reactCategoryThumbnail;
      case 'redux':
        return reduxCategoryThumbnail;
      case 'udacity':
        return udacityCategoryThumbnail;
      default:
        return udacityCategoryThumbnail;
    }
  };

  render() {
    const {
      author,
      body,
      category,
      commentCount,
      id,
      title,
      timestamp,
      voteScore,
      isSingle,
      comments,
    } = this.props;
    const { isEditing } = this.state;

    return (
      <Container>
        <Card bordered={false} style={{ borderRadius: 5 }}>
          <Votes voteScore={voteScore} onVote={this.handleVote} />
          <Image src={this.getThumbnail()} />
          <HeaderContainer>
            <Icon type="user" style={{ marginRight: 8, color: '#fb3b23' }} />
            <AuthorName>{author}</AuthorName>
          </HeaderContainer>
          {isEditing ? (
            <EditPost
              handleEdit={this.handleEdit}
              title={title}
              body={body}
              postId={id}
            />
          ) : (
            <>
              <Title>
                <Link to={`/${category}/${id}`}>{title}</Link>
              </Title>
              <Footer
                timestamp={timestamp}
                commentCount={commentCount}
                handleEdit={this.handleEdit}
                handleDelete={this.handleDelete}
              />
            </>
          )}
          {isSingle && (
            <>
              {!isEditing && <Body>{body}</Body>}
              <Divider orientation="left">Comments</Divider>
              <Comments comments={comments} postId={id} />
            </>
          )}
        </Card>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(PostsActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Post);
