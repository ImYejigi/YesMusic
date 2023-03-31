import React from 'react';
import styled from 'styled-components';
import LogoImage from '../../assets/images/YesMusic.png';

const Center = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
`

const Header = ({ props }) => {
  return (
    <header>
            <div className="Status Bar">
            
            </div>
        
            <main>
                <Center>
                  <img src={LogoImage}/>
                </Center>
            </main>
        </header>
  );
}

export default Header;