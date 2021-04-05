import React from 'react';
import styled from 'styled-components';

const App = () => {

  return (
    <Container>
      <h1>React with parcel starter kit</h1>
    </Container>
  );
};

export default App;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #27277e;
  color: white;
`
