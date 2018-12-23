import React from 'react';
import Moment from 'react-moment';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CommentsActions } from '../../../../store/ducks/comments';

import { abbreviateNumbers } from '../../../../utils/numbers';

import {
  Container,
  Card,
  Message,
  HeaderContainer,
  AuthorName,
  Stats,
  Votes,
} from './styles';

const Comment = ({
  author,
  body,
  id,
  parentId,
  timestamp,
  voteScore,
  voteInCommentRequest,
  ...rest
}) => {
  const handleVote = value => {
    voteInCommentRequest(id, value);
  };

  return (
    <Container {...rest}>
      <Card bordered={false} style={{ borderRadius: 5 }}>
        <Votes onVote={handleVote} isComment>
          {voteScore}
        </Votes>
        <HeaderContainer>
          <AuthorName>{author}</AuthorName>
          <Stats>
            {abbreviateNumbers(voteScore, 1)} points ·{' '}
            <Moment fromNow>{timestamp}</Moment>
          </Stats>
        </HeaderContainer>
        <Message>{body}</Message>
      </Card>
    </Container>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(CommentsActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Comment);
