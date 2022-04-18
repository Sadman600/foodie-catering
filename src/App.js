
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header/Header/Header';
import Home from './Pages/Main/Home/Home/Home';
import ServiceDetail from './Pages/Main/Home/ServiceDetail/ServiceDetail';
import Login from './Pages/Main/Login/Login/Login';
import SignUp from './Pages/Main/Login/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/servicedetail/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
