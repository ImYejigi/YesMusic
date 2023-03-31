import styled from 'styled-components';
import ButtonComp from '../components/common/Button';
import HeaderComp from '../components/common/Header';

export default function Splash(props){
    return(
        <Root>
            <HeaderComp />
                <Content>
                    <Login>
                        <ButtonComp left="16px" color='#ffffff'>
                            <Font>로그인</Font>
                        </ButtonComp>
                    </Login>
                    <SignUp>
                        <ButtonComp left ="192px;" color='transparent' >
                            <Font color='#FFFFFF'>회원가입</Font>
                        </ButtonComp>
                    </SignUp>
                </Content>
        </Root>
    )
    
}

const Root = styled.div`
    display: flex;
    flex-direction: column;
`;

const Content = styled.div`
    display: flex;
    flex: 1;
    align-items: flex-end;
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