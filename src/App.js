
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Footer/Footer/Footer';
import Header from './Pages/Header/Header/Header';
import Blog from './Pages/Main/Blog/Blog/Blog';
import Home from './Pages/Main/Home/Home/Home';
import ServiceDetail from './Pages/Main/Home/ServiceDetail/ServiceDetail';
import Login from './Pages/Main/Login/Login/Login';
import RequireAuth from './Pages/Main/Login/RequireAuth/RequireAuth';
import SignUp from './Pages/Main/Login/SignUp/SignUp';
import PageNotFound from './Pages/Main/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/servicedetail/:serviceId' element={
          <RequireAuth>
            <ServiceDetail></ServiceDetail>
          </RequireAuth>
        }></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
