import React from 'react';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';

const CommonButton = styled.button`
    width: 167px;
    height: 52px;
    background: ${props => props.color};
    border: 2px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    text-align : center;
    align-items : center;

`;
const Font = styled.span`
    font-size: 13px;
    line-height : 15px;
    align-items : center;
    text-align : center;
    color = ${props => props.color}
`;

const Button = (props) => {
  return (

      <CommonButton onClick={props.onClick } color={props.color}>
        <Font>{props.content}</Font>
        </CommonButton>
  );
}

export default Button;