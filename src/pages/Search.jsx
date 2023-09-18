import BottomBarComp from "../components/common/BottomBar";
import TopBarComp from "../components/common/TopBar";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';



export default function Search(props){
    const navigate = useNavigate();

    return(
        <Root>
        <TopBarComp fontColor="#000000" content='search'></TopBarComp>
        <Nav>찾고 싶은 음악을 검색하세요!</Nav>
        <SearchBar></SearchBar>
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
const SearchBar = styled.div`
    display : flex;
    align-items : center;
    height : 50px;
    max-width : 720px;
    margin : 20px;
    border : 3px solid black;
`