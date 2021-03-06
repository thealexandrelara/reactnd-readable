import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as CommentsActions } from '../../../../store/ducks/comments';

import { Container } from './styles';
import Form from './Form';

class AddComment extends React.Component {
  static propTypes = {
    postId: PropTypes.string.isRequired,
    addCommentRequest: PropTypes.func.isRequired,
  };

  state = {
    fields: {
      author: {
        value: 'Udacity',
      },
      body: {
        value: '',
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
    const { postId, addCommentRequest } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        addCommentRequest(values, postId);
      }
    });
  };

  saveFormRef = form => {
    this.form = form;
  };

  render() {
    const { fields } = this.state;
    return (
      <Container>
        <Form
          {...fields}
          onChange={this.handleFormChange}
          onSubmit={this.handleSubmit}
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
)(AddComment);
