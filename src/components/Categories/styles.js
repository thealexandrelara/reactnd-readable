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
      a {
        color: #ffcbba;
      }
    }

    &.ant-menu-item:hover {
      border-color: white;
      a {
        color: white;
      }
    }

    &.ant-menu-item-selected {
      border-color: white;
      a {
        color: white;
      }
    }
  }
`;
