import React from 'react';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';

const CommonButton = styled.button`
    width: 80%;
    height: 52px;
    background: ${props => props.color};
    border : none;
    border-radius: 6px;
    text-align : center;
    align-items : center;
    margin : 15px;
    

`;
const Font = styled.span`
    font-size: 13px;
    line-height : 15px;
    align-items : center;
    text-align : center;
    color : ${props => props.fontColor};
   
`;

const Button = (props) => {

  return (

      <CommonButton onClick={props.onClick } color={props.color}  >
      <Font fontColor={props.fontColor}>{props.content}</Font>
      </CommonButton>
  );
}

export default Button;