import React from 'react';
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
} from './styles';

const Post = ({
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
  voteInPostRequest,
}) => {
  const handleVote = value => {
    voteInPostRequest(id, value);
  };

  return (
    <Container>
      <Card bordered={false} style={{ borderRadius: 5 }}>
        <Votes voteScore={voteScore} onVote={handleVote} />
        <Image src="https://picsum.photos/200" />
        <HeaderContainer>
          <Icon type="user" style={{ marginRight: 8, color: '#fb3b23' }} />
          <AuthorName>{author}</AuthorName>
        </HeaderContainer>
        <Title>
          <Link to={`/category/${category}/${id}`}>{title}</Link>
        </Title>
        <Footer timestamp={timestamp} commentCount={commentCount} />
        {isSingle && (
          <>
            <Body>{body}</Body>
            <Divider orientation="left">Comments</Divider>
            <Comments comments={comments} postId={id} />
          </>
        )}
      </Card>
    </Container>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(PostsActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Post);
