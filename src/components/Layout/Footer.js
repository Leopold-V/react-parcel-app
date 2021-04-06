import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
  return <FooterStyled></FooterStyled>;
};

const FooterStyled = styled.footer`
  //background-color: whitesmoke;
  color: black;
  text-align: center;
  position: static;
  left: 0;
  bottom: 0;
  padding: 1rem;
  width: 100%;
`;
