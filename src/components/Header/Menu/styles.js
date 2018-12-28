import styled from 'styled-components';
import { Menu as UnstyledMenu } from 'antd';

export const Container = styled.div`
  display: grid;
  align-content: center;
  padding: 0 16px;
`;

export const Menu = styled(UnstyledMenu)`
  li {
    &.ant-menu-item {
      color: #8794c5;
      border: none;
      a {
        color: #8794c5;
      }
    }

    &.ant-menu-item:hover {
      border-color: white;
      border: none;
      color: white;
      a {
        color: white;
      }
    }

    &.ant-menu-item-selected {
      border: none;
      a {
        color: white;
      }
    }
  }
`;
