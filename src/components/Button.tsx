import React from 'react';
import styled from 'styled-components';

export enum ButtonType {
  Number,
  Operation
};

type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  label: string;
  // ↓↓↓ Look Ma! a TUPLE in the optional position prop!
  position?: [x: number, y: number];
  width?: number;
  height?: number;
  buttonType?: ButtonType;
};

const StyledButton = styled.button`
  background-color: #727171;
  border: none;
  border-radius: 8px;
  font-size: 24px;
  color: #fff;
`;

const Button: React.FC<ButtonProps> = ({ 
  label, 
  position, 
  width, 
  height, 
  buttonType = ButtonType.Operation,
  onClick
}) => {
  const styles: React.CSSProperties = {};
  if (position) {
    styles.gridColumnStart = position[0] + 1;
    styles.gridRowStart = position[1] + 1;
  }
  if (width) {
    styles.gridColumnEnd = `span ${width}`;
  }
  if (height) {
    styles.gridRowEnd = `span ${height}`;
  }
  if (buttonType === ButtonType.Number) {
    styles.color = '#000';
    styles.background = '#e48900';
  }
  
  return (
    <StyledButton onClick={onClick} style={styles}>
      {label}
    </StyledButton>
  )
};

export default Button;