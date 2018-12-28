import styled from 'styled-components';
import { Select as UnstyledSelect, Input } from 'antd';

const { Search } = Input;

export const Container = styled.div`
  display: grid;
  align-content: center;
  height: 50px;
  grid-template-columns: max-content max-content max-content max-content;
  padding: 0 16px;
`;

export const Select = styled(UnstyledSelect)`
  .ant-select-selection {
    background-color: transparent;
    border-color: #8794c5;
  }

  .anticon {
    color: #8794c5;
  }
`;

export const SearchInput = styled(Search)`
  .ant-input {
    background-color: transparent;
    border-color: #8794c5;
    color: #8794c5;
  }

  .anticon {
    color: #8794c5;
  }
`;
