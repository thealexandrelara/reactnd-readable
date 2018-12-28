import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as PostsActions } from '../../../store/ducks/posts';

import { Container } from './styles';
import Form from './Form';

class EditPost extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    postId: PropTypes.string.isRequired,
    editPostRequest: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired,
  };

  state = {
    fields: {
      title: {
        value: this.props.title,
      },
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
    const { postId, editPostRequest } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        this.handleFormCancel();
        editPostRequest(values, postId);
      }
    });
  };

  handleFormCancel = () => {
    const { handleEdit } = this.props;

    handleEdit('cancel');
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
  bindActionCreators(PostsActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(EditPost);
