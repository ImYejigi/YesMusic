import styled from 'styled-components';
import img from '../imgs/YesMusic.png';  

let Center = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
    `

let 버튼 = styled.button`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 18px 65px;
    gap: 10px;
    position: absolute;
    width: 167px;
    height: 52px;
    top: 727px;
    left : ${props => props.left}
    background: ${props => props.color};
    border: 2px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    `
let 폰트 = styled.p`
        
    width: 37px;
    height: 15px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;

    color: ${props => props.color};
    `

const Splash = (props) => {
    return(
        <header>
            <div className="Status Bar">
            
            </div>
        
            <main>
                <Center>
                  <img src={img}/>
                </Center>
            </main>
            <footer>
                <div className='footer_Button'>
                    <div className='Login_Button'>
                        <버튼 left="16px" color='#ffffff'>
                            <폰트>로그인</폰트>
                        </버튼>
                    </div>
                    <div className='Sign_up'>
                        <버튼 left ="192px;" color='transparent' >
                            <폰트 color='#FFFFFF'>회원가입</폰트>
                        </버튼>
                    </div>
                </div>
            </footer>    
        </header>
    )
    
}


export default Splash;