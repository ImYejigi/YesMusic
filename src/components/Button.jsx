import React from 'react';
import styled from 'styled-components';

let 버튼 = styled.button`
    width : 167px;
    height : 52px;
    Radius : 6px;
    padding : 18px,65px,18px, 65px;
    gap: 10px;
    background-color : ${props => props.color};
    background: linear-gradient(0deg, #000000, #000000),
    linear-gradient(0deg, #FFFFFF, #FFFFFF);

    `
    function Button({ props }) {
        return <버튼 {props.color}></버튼>;
      }

export default Button;