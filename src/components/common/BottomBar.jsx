import React from 'react';
import styled from 'styled-components';
import HomeImg from '../../assets/images/free-icon-home-2948025.png'
import PersonImg from '../../assets/images/free-icon-person-2815428.png'
import Speech from '../../assets/images/free-icon-speech-bubble-2043.png'
import Magnifier from '../../assets/images/free-icon-magnifier-2319177.png'
const IconMenu = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
    height : 150px;
    img {
    width: 100%;
    height: 100%;
    }   
`;


const BottomBMenu = styled.div`
    display: flex;
    height : 370px;
    width : 100%;
    justify-content: center;
    align-items : flex-start;
    border-top : 1px solid #D9D9D9;
`;



const BottomBar = (props) => {

    return(
        <BottomBMenu>
            <IconMenu>
                <Images>
                    <img src={HomeImg}/>
                    <img src={Magnifier}/>
                    <img src={Speech}/>
                    <img src={PersonImg}/>
                </Images>
            </IconMenu>
        </BottomBMenu>
        
    )
}

const Images = styled.div`
    display : flex;
    height : 50px;
    width : 50px;
    align-items : center;
    margin-left : 20px;
`;

export default BottomBar;