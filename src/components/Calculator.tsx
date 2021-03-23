import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #323232;
`;

const Calculator: React.FC<{}> = () => {
  return (
    <Container>
      Hello World! I am the Calculator Component.
    </Container>
  )
};

export default Calculator;