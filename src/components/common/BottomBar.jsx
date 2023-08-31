import React from 'react';
import styled from 'styled-components';
import HomeImg from '../../assets/images/free-icon-home-2948025.png'
import PersonImg from '../../assets/images/free-icon-person-2815428.png'
import Speech from '../../assets/images/free-icon-speech-bubble-2043.png'
import Magnifier from '../../assets/images/free-icon-magnifier-2319177.png'
import { Link } from 'react-router-dom';
import Search from '../../pages/Search';



const BottomBar = (props) => {

    return(
        <BottomBMenu>
            <IconMenu>
                <Images>
                    <ImgItems><img src={HomeImg}/></ImgItems>            
                    <ImgItems><Link to='/Search'><img src={Magnifier}/></Link></ImgItems>
                    <ImgItems><img src={Speech}/></ImgItems>
                    <ImgItems><img src={PersonImg}/></ImgItems>
                </Images>
            </IconMenu>
        </BottomBMenu>
        
    )
}

const Images = styled.div`
    display : flex;
    width : 100%;
    align-items : center;
   
`;

const ImgItems = styled.div`
    display : flex;
    align-items : center;
    margin : 70px;
`;

const IconMenu = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
    height : 150px;
    width : 100%;
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

export default BottomBar;