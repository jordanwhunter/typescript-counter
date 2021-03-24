import React from 'react';
import styled from 'styled-components';

export enum ButtonType {
  Number,
  Operation
};

type ButtonProps = {
  label: string;
  // ↓↓↓ Look Ma! a TUPLE in the optional position prop!
  position?: [x: number, y: number];
  width?: number;
  height?: number;
  type?: ButtonType;
};

const StyledButton = styled.button`
  background-color: #727171;
  border: none;
  border-radius: 8px;
  font-size: 24px;
  color: #fff;
`;

const Button: React.FC<ButtonProps> = ({ label, position, width, height, type = ButtonType.Operation }) => {
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
  if (type === ButtonType.Number) {
    styles.color = '#000';
    styles.background = '#e48900';
  }
  
  return (
    <StyledButton style={styles}>
      {label}
    </StyledButton>
  )
};

export default Button;