import React from 'react';
import Button from './Button';
import styled from 'styled-components';

const Container = styled.div`
  background: #323232;
  flex: 1;
`;

const Grid = styled.div`
  display: grid;
`;

const Calculator: React.FC<{}> = () => {
  return (
    <Container>
      Hello World! I am the Calculator Component.
      <Grid>
        <Button />
      </Grid>
    </Container>
  )
};

export default Calculator;