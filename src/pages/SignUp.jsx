import styled from 'styled-components';
import ButtonComp from '../components/common/Button';
import HeaderComp from '../components/common/Header';
import InputFliedComp from '../components/common/InputFiled';
import { useNavigate } from 'react-router-dom';


export default function SignUp(props){
    const navigate  =  useNavigate();

    return (
        <Root>
        <HeaderComp/>
            <Content>
                <SignInfo>
                    <InputFliedComp type='text' placeholder='아이디'></InputFliedComp>
                    <InputFliedComp type='password' placeholder='비밀번호'></InputFliedComp>
                    <InputFliedComp type='password' placeholder='비밀번호 확인'></InputFliedComp>
                    <ButtonComp color='#BB6BD9' content='회원가입' onClick={()=>navigate("#")} fontColor='#FFFFFFF'></ButtonComp>
                </SignInfo>
            </Content>
        </Root>
    )
}


const SignInfo = styled.div`
    display : flex;
    flex : 1;
    flex-direction : column;
    align-items : center;
    
`;


const Content = styled.div`
    display: flex;
    align-items: flex-end;
    height: calc(100vh - 470px);
    
`;

const Root = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 720px ;
    margin: 0 auto;

`;