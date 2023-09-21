import TopBarComp from "../components/common/TopBar";
import BottomBarComp from "../components/common/BottomBar";
import styled from "styled-components";
import InputFlied from "../components/common/InputFiled";


const Root = styled.div`
    display : flex;
    flex-direction: column;
    max-width : 720px;
    margin : 0 auto;
`;

const Nav = styled.div`
    display :flex;
    font-size : 40px;
    font-weight : bold;
    margin : 20px;
    
`;

export default function Mypage(props){
    
    
    return(
     <Root>
        <TopBarComp fontColor="#000000" content="mypage"></TopBarComp>
        <Nav>마이페이지</Nav>
        <InputFlied type='password' placeholder='비밀번호 변경'></InputFlied>
        <InputFlied type='text' placeholder='개인정보 처리 방침'></InputFlied>
        <BottomBarComp></BottomBarComp>
     </Root>   
    )
}