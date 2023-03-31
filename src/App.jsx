import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Splash from './pages/Splash';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Splash/>} />
      <Route path='/login' Component={<Login/>} />
    </Routes>
  );
};


export default App;
