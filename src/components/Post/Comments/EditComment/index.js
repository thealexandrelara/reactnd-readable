import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as CommentsActions } from '../../../../store/ducks/comments';

import { Container } from './styles';
import Form from './Form';

class EditComment extends Component {
  static propTypes = {
    postId: PropTypes.string.isRequired,
    commentId: PropTypes.string.isRequired,
    editCommentRequest: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired,
    body: PropTypes.string.isRequired,
  };

  state = {
    fields: {
      body: {
        value: this.props.body,
      },
    },
  };

  handleFormChange = changedFields => {
    this.setState(({ fields }) => ({
      fields: { ...fields, ...changedFields },
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    const { form } = this;
    const { postId, commentId, editCommentRequest } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        this.handleFormCancel();
        editCommentRequest(values, commentId, postId);
      }
    });
  };

  handleFormCancel = () => {
    const { handleCancel } = this.props;

    handleCancel();
  };

  saveFormRef = form => {
    this.form = form;
  };

  render() {
    const { ...rest } = this.props;
    const { fields } = this.state;
    return (
      <Container {...rest}>
        <Form
          {...fields}
          onChange={this.handleFormChange}
          onSubmit={this.handleSubmit}
          onCancel={this.handleFormCancel}
          ref={this.saveFormRef}
        />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CommentsActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(EditComment);
