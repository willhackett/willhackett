import React from 'react';
import styled from 'styled-components';

import BasicHeader from '../../components/BasicHeader';

const Container = styled.main`
  background: #161616;
  min-height: 100vh;
  margin: 0;
  color: white;
  padding: 3.5rem 0.5rem;
`;

const Dmps = () => (
  <Container>
    <BasicHeader />
    <div>DMPS!?</div>
  </Container>
);

export default Dmps;
