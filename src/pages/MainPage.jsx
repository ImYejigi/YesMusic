import styled from 'styled-components';
import BottomBarComp from '../components/common/BottomBar';
import { useNavigate } from 'react-router-dom';



export default function MainPage(props){
    const navigate = useNavigate();
    
    return(
      
        <BottomBarComp/>
    )
}