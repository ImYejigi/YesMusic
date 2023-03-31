import React from 'react';
import styled from 'styled-components';

const CommonButton = styled.button`
    padding: 18px 65px;
    gap: 10px;
    width: 167px;
    height: 52px;
    left : ${props => props.left}
    background: ${props => props.color};
    border: 2px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
`
const Button = ({ props }) => {
  return (
      <CommonButton {...props?.color} >
        </CommonButton>
  );
}

export default Button;