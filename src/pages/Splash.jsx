import styled from 'styled-components';
import Button from '../components/common/Button';
import Header from '../components/common/Header';

export default function Splash(props){
    return(
        <>
            <Header />
                <Content>
                    <Login>
                        <Button left="16px" color='#ffffff'>
                            <Font>로그인</Font>
                        </Button>
                    </Login>
                    <SignUp>
                        <Button left ="192px;" color='transparent' >
                            <Font color='#FFFFFF'>회원가입</Font>
                        </Button>
                    </SignUp>
                </Content>
        </>
    )
    
}

const Content = styled.div`
    dispaly: flex;
    flex: 1;
`;

const Login = styled.div`
    display: flex;
    flex: 1;
`;

const SignUp = styled.div`
    display: flex;
    flex: 1;
`;

const Font = styled.p`   
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