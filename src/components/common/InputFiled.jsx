import React from 'react';
import styled from 'styled-components';

const InputStyle = styled.input`
    width : 80%;
    height : 52px;
    border : 2px solid #000000;
    margin : 8px;

`;

const InputFlied = (props) => {
   return(
    <InputStyle type={props.type} placeholder={props.placeholder}></InputStyle>
   )
  }

  export default InputFlied;