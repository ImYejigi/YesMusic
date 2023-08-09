import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Splash from './pages/Splash';
import SignUp from './pages/SignUp';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Splash/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/MainPage' element={<MainPage/>}/>
    </Routes>
  );
};


export default App;
