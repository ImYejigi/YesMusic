import React from 'react';
import styled from 'styled-components';
import Back from '../../assets/images/Polygon 1.png';


const TopBar = (props) => {
    return (
        <TopMenu>
            <Images><img src={Back}/></Images>
            <TextCommon fontColor={props.fontColor}>{props.content}</TextCommon>
        </TopMenu>
    );
}

const TopMenu = styled.div`
    display : flex;
    height : 110px;
    width : 100%;
    background-color : #D9D9D9;
    
`;

const Images = styled.div`
    display : flex;
    align-items : center;
    margin-left : 20px;
`;

const TextCommon = styled.span`
    display : flex;
    font-size : 20px;
    font-weight : bold;
    line-height : 15px;
    text-align : center;
    text-transform : uppercase;
    color : ${props => props.fontColor};
    align-items : center;
    margin : auto;
`;


export default TopBar;