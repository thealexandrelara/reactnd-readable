import React from 'react';

import {
  Container,
  Card,
  Message,
  HeaderContainer,
  AuthorName,
  Stats,
  Votes,
} from './styles';
import Form from './Form';

class AddComment extends React.Component {
  state = {
    fields: {
      author: {
        value: 'Udacity',
      },
      message: {
        value: '',
      },
    },
  };

  handleFormChange = changedFields => {
    this.setState(({ fields }) => ({
      fields: { ...fields, ...changedFields },
    }));
  };

  render() {
    const { fields } = this.state;
    return (
      <Container>
        <Form {...fields} onChange={this.handleFormChange} />
      </Container>
    );
  }
}
export default AddComment;
