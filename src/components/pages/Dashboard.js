import React from 'react';
import styled from 'styled-components';

import { TitlePrimary } from '../Typo';

export const Dashboard = () => {
  return (
    <Container>
      <TitlePrimary>Dashboard</TitlePrimary>
      <Card>
        <Box />
      </Card>
    </Container>
  );
};

const Box = styled.div`
  width: 100%;
  margin: 1.5rem;
  border: 4px dashed #e4e7eb;
  border-radius: 8px;
`;

const Card = styled.div`
  display: flex;
  margin-top: 3.5rem;
  background-color: white;
  border-radius: 8px;
  width: 100%;
  height: 33rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;
