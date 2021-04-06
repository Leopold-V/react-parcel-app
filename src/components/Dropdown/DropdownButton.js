import React from 'react';
import styled from 'styled-components';

export const DropdownButton = ({ children, theme }) => {
  return <DropdownButtonStyled theme={theme}>{children}</DropdownButtonStyled>;
};

const DropdownButtonStyled = styled.div`
  border: none;
  outline: none;
  color: inherit;
  font-size: inherit;
  background-color: inherit;
  font-family: inherit;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.6rem 1rem;
  margin: 0 0.6rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;
