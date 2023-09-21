import BottomBarComp from "../components/common/BottomBar";
import TopBarComp from "../components/common/TopBar";
import styled from "styled-components";
import InputFlied from "../components/common/InputFiled";
import { useNavigate } from 'react-router-dom';

// const searchList = () => {
//     const filtered = sampleData.filter((itemList) => {
// return itemList.name.toUpperCase().includes(userInput.toUpperCase());

//     })
// }




export default function Search(props){
    const navigate = useNavigate();

    return(
        <Root>
        <TopBarComp fontColor="#000000" content='search'></TopBarComp>
        <Nav>찾고 싶은 음악을 검색하세요!</Nav>
        <InputFlied></InputFlied>
        <BottomBarComp/>

        </Root>
        
    );
}

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
