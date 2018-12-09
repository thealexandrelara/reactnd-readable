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
    }

    &.ant-menu-item:hover {
      color: white;
      border-color: white;
      border: none;
    }

    &.ant-menu-item-selected {
      color: white;
      border: none;
    }
  }
`;
