import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  label: string;
  // ↓↓↓ Look Ma! a TUPLE in the optional position prop!
  position?: [x: number, y: number];
  width?: number;
  height?: number;
};

const StyledButton = styled.button`
  background-color: #e48900;
  border: none;
  border-radius: 8px;
  font-size: 24px;
`;

const Button: React.FC<ButtonProps> = ({ label, position, width, height }) => {
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
  
  return (
    <StyledButton style={styles}>
      {label}
    </StyledButton>
  )
};

export default Button;