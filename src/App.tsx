import React from 'react';
import Calculator from './components/Calculator';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  background: #323232;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Container>
      <Calculator />
    </Container>
  );
}

export default App;
