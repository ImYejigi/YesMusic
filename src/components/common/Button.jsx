import React from 'react';
import styled from 'styled-components';

const CommonButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 18px 65px;
    gap: 10px;
    position: absolute;
    width: 167px;
    height: 52px;
    top: 727px;
    left : ${props => props.left}
    background: ${props => props.color};
    border: 2px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
`
const Button = ({ props }) => {
  return <CommonButton {...props?.color} >{props?.content}</CommonButton>;
}

export default Button;