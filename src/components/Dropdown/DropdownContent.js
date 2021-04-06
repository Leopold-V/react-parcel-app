import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DropdownContent = ({ children }) => {
  return (
    <Wrapper>
      <DropdownContentStyled>{children}</DropdownContentStyled>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  visibility: collapse;
  background-color: transparent;
  top: 2.5rem;
  width: 100%;
  height: 1.5rem;
  text-align: center;
  transition: all 0.5s;
`;

const DropdownContentStyled = styled.ul`
  position: absolute;
  opacity: 0;
  transform: scale(0);
  top: 1.5rem;
  right: 0rem;
  min-width: 90%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  transition: all 0.5s;
`;

export const DropdownLink = styled(Link)`
  padding: 0.5rem 0;
  width: 90%;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
  color: gray;
  transition: all 0.3s;
  &:hover {
    color: black;
  }
`;
