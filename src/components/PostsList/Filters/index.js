import React from 'react';
import PropTypes from 'prop-types';

import { Input } from 'antd';
import { Container, Select, SearchInput } from './styles';

const Filters = ({ handleChange, handleSearchInputChange }) => (
  <Container>
    <Input.Group compact>
      <Select
        defaultValue="date"
        style={{
          width: 120,
          color: '#8794c5',
          marginLeft: 16,
        }}
        onChange={handleChange}
      >
        <Select.Option value="timestamp">Date</Select.Option>
        <Select.Option value="voteScore">Votes</Select.Option>
        <Select.Option value="commentCount">Comments</Select.Option>
      </Select>
      <SearchInput
        placeholder="input search text"
        onChange={handleSearchInputChange}
        style={{ width: 200 }}
      />
    </Input.Group>
  </Container>
);

Filters.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSearchInputChange: PropTypes.func.isRequired,
};

export default Filters;
