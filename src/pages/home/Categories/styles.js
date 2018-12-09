import styled from 'styled-components';
import { Menu as UnstyledMenu } from 'antd';

export const Container = styled.div`
  display: grid;
  align-content: center;
  height: 50px;
  background-color: #ff6934;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  padding: 0 16px;
`;

export const Menu = styled(UnstyledMenu)`
  li {
    &.ant-menu-item {
      color: #ffcbba;
    }

    &.ant-menu-item:hover {
      color: white;
      border-color: white;
    }

    &.ant-menu-item-selected {
      color: white;
      border-color: white;
    }
  }
`;
