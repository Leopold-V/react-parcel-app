import React from 'react';
import styled from 'styled-components';

import Footer from './components/Footer';

const App = () => {
  return (
    <Container>
      <Title>React with parcel starter-kit</Title>
      <Footer />
    </Container>
  );
};

export default App;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 900;
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #27277e;
  color: white;
`;
