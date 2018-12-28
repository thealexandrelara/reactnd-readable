import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  EditComment,
  EditClickable,
} from './styles';
import DeletePopconfirm from './DeletePopconfirm';

class Comment extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    voteScore: PropTypes.number.isRequired,
    voteInCommentRequest: PropTypes.func.isRequired,
    deleteCommentRequest: PropTypes.func.isRequired,
    parentId: PropTypes.string.isRequired,
  };

  state = {
    isEditing: false,
  };

  handleVote = value => {
    const { id, voteInCommentRequest } = this.props;

    voteInCommentRequest(id, value);
  };

  handleEdit = () => {
    this.setState(() => ({ isEditing: true }));
  };

  handleEditCancel = () => {
    this.setState(() => ({ isEditing: false }));
  };

  handleDelete = () => {
    const { id, parentId, deleteCommentRequest } = this.props;

    deleteCommentRequest(id, parentId);
  };

  render() {
    const {
      author,
      body,
      id,
      parentId,
      timestamp,
      voteScore,
      voteInCommentRequest,
      ...rest
    } = this.props;
    const { isEditing } = this.state;

    return (
      <Container {...rest}>
        <Card bordered={false} style={{ borderRadius: 5 }}>
          <Votes onVote={this.handleVote} isComment>
            {voteScore}
          </Votes>
          <HeaderContainer>
            <AuthorName>{author}</AuthorName>
            <Stats>
              {abbreviateNumbers(voteScore, 1)} points ·{' '}
              <Moment fromNow>{timestamp}</Moment>
            </Stats>
            <EditClickable onClick={this.handleEdit}> · {' '} edit</EditClickable>
            <DeletePopconfirm handleDelete={this.handleDelete}> · {' '} delete</DeletePopconfirm>
          </HeaderContainer>
          { isEditing 
            ? <EditComment postId={parentId} commentId={id} body={body} handleCancel={this.handleEditCancel} /> 
            : <Message>{body}</Message> 
          }
        </Card>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CommentsActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Comment);
