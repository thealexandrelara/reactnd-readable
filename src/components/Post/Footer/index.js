import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown, Icon } from 'antd';
import Moment from 'react-moment';
import { Container } from './styles';
import Info from './Info';

const Footer = ({
  commentCount,
  timestamp,
  handleEdit,
  handleDelete,
  ...rest
}) => {
  const onMenuClick = ({ key }) => {
    if (key === 'edit') {
      handleEdit(key);
    } else if (key === 'delete') {
      handleDelete();
    }
  };

  return (
    <Container {...rest}>
      <Info
        iconName="clock-circle"
        text={<Moment fromNow>{timestamp}</Moment>}
      />
      <Info
        iconName="message"
        text={
          commentCount === 1
            ? `${commentCount} comment`
            : `${commentCount} comments`
        }
      />
      <Dropdown
        overlay={
          <Menu onClick={onMenuClick}>
            <Menu.Item key="edit">Edit</Menu.Item>
            <Menu.Item key="delete">Delete</Menu.Item>
          </Menu>
        }
        trigger={['click']}
      >
        <Icon
          type="ellipsis"
          style={{ maxWidth: 30, cursor: 'pointer', fontSize: 'px' }}
        />
      </Dropdown>
    </Container>
  );
};

Footer.propTypes = {
  commentCount: PropTypes.number.isRequired,
  timestamp: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default Footer;
