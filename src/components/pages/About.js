import React from 'react';
import styled from 'styled-components';

import { TitlePrimary } from '../Typo';

export const About = () => {
  return (
    <Container>
    <TitlePrimary>About</TitlePrimary>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;
