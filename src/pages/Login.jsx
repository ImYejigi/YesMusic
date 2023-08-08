import styled from 'styled-components';
import ButtonComp from '../components/common/Button';
import HeaderComp from '../components/common/Header';
import InputFliedComp from '../components/common/InputFiled';
import { useNavigate } from 'react-router-dom';



export default function Login(props){
    const navigate = useNavigate();
    
    return(
        <Root>
        <HeaderComp />
            <Content>
                <Loging>
                    <InputFliedComp type='text'placeholder='아이디'></InputFliedComp>
                    <InputFliedComp type='password' placeholder='비밀번호'></InputFliedComp>
                    <ButtonComp  color="#BB6BD9" content='로그인' onClick={()=>navigate("/login")} fontColor="#ffffff"/>
                    <FindIdPw>
                        <FindIdPwBtn>아이디찾기</FindIdPwBtn>
                        <FindIdPwBtn>비밀번호찾기</FindIdPwBtn>
                    </FindIdPw>
                </Loging>
               
            </Content>
    </Root>
    )
}
const FindIdPw = styled.div`
    display : flex;
    justify-content : space-between;
`;

const FindIdPwBtn = styled.button`
    display : flex;
    text-decoration : none;
    color : black;
    border : none;
    outline : none;
    justify-content: space-between;

`;

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

const Loging = styled.div`
    display : flex;
    flex : 1;
    flex-direction : column;
    align-items : center;
    
`;

