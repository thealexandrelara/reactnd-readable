import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as PostsActions } from '../../store/ducks/posts';

import { Container } from './styles';
import Form from './Form';

const INITIAL_FIELDS_STATE = {
  title: {
    value: '',
  },
  author: {
    value: '',
  },
  body: {
    value: '',
  },
  category: {
    value: '',
  },
};

class AddPost extends React.Component {
  static propTypes = {
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
    addPostRequest: PropTypes.func.isRequired,
  };

  static defaultProps = {
    categories: [],
  };

  state = {
    fields: INITIAL_FIELDS_STATE,
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  hideModal = () => {
    this.setState({ visible: false });
  };

  resetValues = () => {
    this.setState({ fields: INITIAL_FIELDS_STATE });
  };

  handleCancel = () => {
    this.hideModal();
    this.resetValues();
  };

  handleFormChange = changedFields => {
    this.setState(({ fields }) => ({
      fields: { ...fields, ...changedFields },
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    const { form } = this;
    const { addPostRequest } = this.props;

    form.validateFields((err, values) => {
      if (!err) {
        addPostRequest(values);
        this.hideModal();
        form.resetFields();
      }
    });
  };

  saveFormRef = form => {
    this.form = form;
  };

  render() {
    const { categories } = this.props;
    const { fields, visible } = this.state;
    return (
      <Container>
        <span
          onClick={this.showModal}
          onKeyDown={this.showModal}
          role="menuitem"
          tabIndex={-1}
        >
          Create new post
        </span>
        <Form
          {...fields}
          categories={categories}
          onChange={this.handleFormChange}
          onSubmit={this.handleSubmit}
          onCancel={this.handleCancel}
          visible={visible}
          ref={this.saveFormRef}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.data,
  loadingCategories: state.categories.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PostsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddPost);
