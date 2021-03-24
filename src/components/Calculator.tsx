import React, { useState } from 'react';
import Button, { ButtonType } from './Button';
import Calc, { CalcInput } from '../modules/calc';
import styled from 'styled-components';

const Container = styled.div``;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 80px);
  grid-template-rows: 120px repeat(5, 80px);
  grid-gap: 10px;
`;

const Display = styled.div`
  background: #fff;
  border-radius: 8px;
  text-align: right;
  font-size: 48px;
  grid-column-end: span 4;
  padding: 30px 24px;
`;

const Calculator: React.FC<{}> = () => {
  const [inputs, setInputs] = useState<Array<CalcInput>>([]);
  const state = Calc.getState(inputs);
  const { displayValue } = state;

  return (
    <Container>
      <Grid>
        <Display>{displayValue}</Display>
        <Button label='AC' position={[0, 1]} width={2} />
        <Button label='C' position={[2, 1]} width={2} />
        <Button label='-' position={[3, 2]} />
        <Button label='+' position={[3, 3]} />
        <Button label='=' position={[3, 4]} height={2}/>
        <Button label='9' position={[2, 2]} type={ButtonType.Number} />
        <Button label='8' position={[1, 2]} type={ButtonType.Number} />
        <Button label='7' position={[0, 2]} type={ButtonType.Number} />
        <Button label='6' position={[2, 3]} type={ButtonType.Number} />
        <Button label='5' position={[1, 3]} type={ButtonType.Number} />
        <Button label='4' position={[0, 3]} type={ButtonType.Number} />
        <Button label='3' position={[2, 4]} type={ButtonType.Number} />
        <Button label='2' position={[1, 4]} type={ButtonType.Number} />
        <Button label='1' position={[0, 4]} type={ButtonType.Number} />
        <Button label='0' position={[0, 5]} type={ButtonType.Number} width={3} />
      </Grid>
    </Container>
  )
};

export default Calculator;