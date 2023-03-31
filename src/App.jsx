import { Route, Routes } from 'react-router-dom';
import Splash from './pages/Splash';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Splash/>} />
      {/* <Route path='/login' Component={<Login/>} /> */}
    </Routes>
  );
};


export default App;
