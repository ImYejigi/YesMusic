import styled from 'styled-components';
import ButtonComp from '../components/common/Button';
import HeaderComp from '../components/common/Header';
import { useNavigate } from 'react-router-dom';



export default function Login(props){
    const navigate = useNavigate();
    return(
        <Root>
        <HeaderComp />
            <Content>
                <Loging>
                    <ButtonComp  color="#ffffff" content='로그인' onClick={()=>navigate("/login")}/>
                </Loging>
                <ButtonComp />
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
const IdPwText = styled.div`
    display : flex;
    flex : 1;
    justify-content : center;
    
`;

const Content = styled.div`
    display: flex;
    align-items: flex-end;
    height: calc(100vh - 470px);
    
`;

const Loging = styled.div`
    display : flex;
    flex : 1;
    justify-content : center;
    
`;

