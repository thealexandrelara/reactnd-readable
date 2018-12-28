import React from 'react';
import PropTypes from 'prop-types';
import { Popconfirm } from 'antd';

const DeletePopconfirm = ({ handleDelete, children }) => (
  <Popconfirm
    title="Are you sure delete this comment?"
    onConfirm={handleDelete}
    okText="Yes"
    cancelText="No"
  >
    <span
      href="#"
      style={{
        fontSize: '0.7rem',
        marginLeft: 8,
        color: 'darkgray',
        cursor: 'pointer',
      }}
    >
      {children}
    </span>
  </Popconfirm>
);

DeletePopconfirm.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
};

export default DeletePopconfirm;
