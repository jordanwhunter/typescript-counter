import React, { useState } from 'react';
import Button, { ButtonType } from './Button';
import Calc, { CalcInput, InputType, OperatorType } from '../modules/calc';
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
  // console.log(inputs)
  
  const handleAllClear = () => setInputs([]);

  const handleClear = () => setInputs(prev => prev.slice(0, -1));

  const appendInput = (input: CalcInput): void => {
    setInputs((prev) => [...prev, input])
  };
  
  const handleNumerical = (value: number) => () => {
    appendInput({ type: InputType.Numerical, value })
  };

  const handleOperator = (operator: OperatorType) => () => {
    appendInput({ type: InputType.Operator, operator})
  };

  return (
    <Container>
      <Grid>
        <Display>{displayValue}</Display>
        <Button label='AC' position={[0, 1]} width={2} onClick={handleAllClear} />
        <Button label='C' position={[2, 1]} width={2} onClick={handleClear}/>
        <Button label='-' position={[3, 2]} onClick={handleOperator(OperatorType.Subtract)} />
        <Button label='+' position={[3, 3]} onClick={handleOperator(OperatorType.Add)} />
        <Button label='=' position={[3, 4]} height={2} onClick={handleOperator(OperatorType.Equals)} />
        <Button label='9' position={[2, 2]} buttonType={ButtonType.Number} onClick={handleNumerical(9)} />
        <Button label='8' position={[1, 2]} buttonType={ButtonType.Number} onClick={handleNumerical(8)} />
        <Button label='7' position={[0, 2]} buttonType={ButtonType.Number} onClick={handleNumerical(7)} />
        <Button label='6' position={[2, 3]} buttonType={ButtonType.Number} onClick={handleNumerical(6)} />
        <Button label='5' position={[1, 3]} buttonType={ButtonType.Number} onClick={handleNumerical(5)} />
        <Button label='4' position={[0, 3]} buttonType={ButtonType.Number} onClick={handleNumerical(4)} />
        <Button label='3' position={[2, 4]} buttonType={ButtonType.Number} onClick={handleNumerical(3)} />
        <Button label='2' position={[1, 4]} buttonType={ButtonType.Number} onClick={handleNumerical(2)} />
        <Button label='1' position={[0, 4]} buttonType={ButtonType.Number} onClick={handleNumerical(1)} />
        <Button label='0' position={[0, 5]} buttonType={ButtonType.Number} width={3} onClick={handleNumerical(0)} />
      </Grid>
    </Container>
  )
};

export default Calculator;