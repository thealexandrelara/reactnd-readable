import styled from 'styled-components';

import { Menu as UnstyledMenu, Button } from 'antd';

export const styles = {
  buttonStyles: {
    borderRadius: 0,
    backgroundColor: '#fb3e25',
    borderColor: '#fb3e25',
    marginBottom: 0,
  },
  menuStyles: {
    boxShadow: 'black',
  },
  menuItemStyles: {},
};

export const Container = styled.aside`
  display: grid;
  grid-template-columns: 80px auto;
  grid-template-rows: 40px;
  /* background-color: white; */
`;

export const MenuButton = styled(Button)`
  width: 40px;
`;

export const Menu = styled(UnstyledMenu)`
  grid-column: span 2;
  grid-row: 2/ 10;
  &.ant-menu {
    -webkit-box-shadow: 1px 11px 35px 5px rgba(0, 0, 0, 0.1) !important;
    box-shadow: 1px 11px 35px 5px rgba(0, 0, 0, 0.1) !important;
  }

  &.ant-menu-inline {
    min-width: 256px;
  }
`;
