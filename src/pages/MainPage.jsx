import styled from 'styled-components';
import BottomBarComp from '../components/common/BottomBar';
import TopBarComp from '../components/common/TopBar';
import { useNavigate } from 'react-router-dom';
import MainImg from '../assets/images/Frame.png';


export default function MainPage(props){
    const navigate = useNavigate();

    return(
        <Root>
        <TopBarComp fontColor="#000000" content='yesmusic'></TopBarComp>
        <Nav>오늘의 추천음악</Nav>
        <Articles><img src={MainImg}/></Articles>
        <MusicName>newjeans(뉴진스)-ditto</MusicName>
        <BottomBarComp></BottomBarComp>
        </Root>
        
    );
}

const Nav = styled.div`
    display :felx;
    font-size : 50px;
    font-weight : bold;
    
`;

const Articles = styled.div `
    display :flex;
`;


const MusicName = styled.div`
    display :flex;
    font-size : 30px;
    font-weight : bold;
   
`;
const Root = styled.div`
    display : flex;
    flex-direction: column;
    max-width : 720px;
    margin : 0 auto;
`;