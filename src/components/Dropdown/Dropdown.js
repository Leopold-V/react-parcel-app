import React from 'react';
import styled from 'styled-components';

export const Dropdown = ({ children }) => {
  return <DropdownStyled>{children}</DropdownStyled>;
};

const DropdownStyled = styled.div`
  position: relative;
  &:hover {
    & > div {
      visibility: visible;
      & > ul {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
`;
