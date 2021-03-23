import React from 'react';
import Button from './Button';
import styled from 'styled-components';

const Container = styled.div`
  background: #323232;
  flex: 1;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 80px);
  grid-template-rows: repeat(5, 80px);
`;

const Calculator: React.FC<{}> = () => {
  return (
    <Container>
      <Grid>
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        
      </Grid>
    </Container>
  )
};

export default Calculator;