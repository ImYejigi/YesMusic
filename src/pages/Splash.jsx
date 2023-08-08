import styled from 'styled-components';
import ButtonComp from '../components/common/Button';
import HeaderComp from '../components/common/Header';
import { useNavigate } from 'react-router-dom';



export default function Splash(props){
    const navigate = useNavigate();
    
    

    return(
        <Root>
            <HeaderComp />
                <Content>
                    <Login>
                        <ButtonComp  color="#ffffff" content='로그인' onClick={()=>navigate("/login")}/>
                    </Login>
                    <SignUp>
                        <ButtonComp  color='transparent' content='회원가입'/>
                    </SignUp>
                </Content>
        </Root>
    )
    
}





const Root = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 720px ;
    margin: 0 auto;

`;

const Content = styled.div`
    display: flex;
    align-items: flex-end;
    height: calc(100vh - 470px);
    
`;

const Login = styled.div`
    display : flex;
    flex : 1;
    justify-content : center;
    
`;

const SignUp = styled.div`
    display: flex;
    flex: 1;
    justify-content : center;
`;
