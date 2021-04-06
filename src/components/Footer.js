import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
  return <FooterStyled>I am a footer</FooterStyled>;
};

export default Footer;

const FooterStyled = styled.footer`
  background-color: white;
  color: black;
  text-align: center;
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 1rem;
  width: 100%;
`;
