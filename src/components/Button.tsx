import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  label: string,
};

const StyledButton = styled.button`

`;

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <StyledButton>
      {label}
    </StyledButton>
  )
};

export default Button;