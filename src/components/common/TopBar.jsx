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
    background-color : #D9D9D9;

`;

const Images = styled.div`
    display : flex;
    height : 100px;
    width : 100px;
    align-items : center;
    margin-left : 20px;
`;

const TextCommon = styled.span`
    font-size : 18px ;
    font-weight : bold;
    line-height : 15px;
    align-items : center;
    text-align : center;
    text-transform : uppercase;
    color : ${props => props.fontColor};
`;


export default TopBar;