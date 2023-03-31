import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Splash from './pages/Splash';



const App = () => {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={<Splash/>} />
          <Route path='/login' Component={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
