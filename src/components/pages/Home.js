import React from 'react';
import styled from 'styled-components';

import { Map } from '../Leaflet/Map';
import { TitlePrimary } from '../Typo';

export const Home = () => {
  return (
    <Container>
      <TitlePrimary>Home</TitlePrimary>
      <WrapperMap>
        <Map />
      </WrapperMap>
    </Container>
  );
};

const WrapperMap = styled.div`
  display: flex;
  margin: 3.5rem auto 0rem auto;
  background-color: white;
  border-radius: 8px;
  width: 80%;
  height: 40rem;
  padding: 1rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;