import React from 'react';
import styled from 'styled-components';
import LogoImage from '../../assets/images/YesMusic.png';

const HeaderContent = styled.div`
    display: flex;
    height : 370px;
    width : 100%;
    justify-content: center;
    align-items : flex-start;
`;

const Center = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
    height : 150px;
    img {
        width: 100%;
        height: 100%;
    }
`

const Header = ({ props }) => {
  return (
    <HeaderContent>
        <Center>
            <img src={LogoImage}/>
        </Center>
    </HeaderContent>
  );
}

export default Header;