import React from 'react';

import { Container, Select, SearchInput } from './styles';
import { Input } from 'antd';

const Filters = ({ handleChange }) => (
  <Container>
    <Input.Group compact>
      <Select
        defaultValue="date"
        style={{
          width: 120,
          color: '#8794c5',
          marginLeft: 16
        }}
        onChange={handleChange}
      >
        <Select.Option value="date">Date</Select.Option>
        <Select.Option value="votes">Votes</Select.Option>
        <Select.Option value="comments">Comments</Select.Option>
        <Select.Option value="title">Title</Select.Option>
      </Select>
      <SearchInput
        placeholder="input search text"
        onSearch={value => console.log(value)}
        style={{ width: 200 }}
      />
    </Input.Group>
  </Container>
);

export default Filters;
