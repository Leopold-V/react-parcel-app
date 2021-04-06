import React, { useContext } from 'react';
import styled from 'styled-components';

import { themeContext } from '../Context/themeContext';

import { Footer } from './Footer';
import { Navbar } from './Navbar';

export const Layout = ({ children }) => {
  const { colors } = useContext(themeContext);

  return (
    <Container theme={colors}>
      <HeaderBackground theme={colors} />
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
};

const HeaderBackground = styled.div`
  position: absolute;
  left: 0;
  background-color: ${({ theme }) => theme.primary};
  height: 22rem;
  min-width: 100%;
  z-index: -1;
`;

const Container = styled.div`
  position: relative;
  padding: 0 3rem;
  color: ${({ theme }) => theme.text};
`;
