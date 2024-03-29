import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Splash from './pages/Splash';
import SignUp from './pages/SignUp';
import MainPage from './pages/MainPage';
import Search from './pages/Search';
import Mypage from './pages/MyPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Splash/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/MainPage' element={<MainPage/>}/>
      <Route path='/Search' element={<Search/>}/>
      <Route path='/MyPage' element={<Mypage/>}/>
    </Routes>
  );
};


export default App;
