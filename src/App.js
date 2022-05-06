
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import About from './Pages/About/About';

import Header from './Pages/Shared/Header/Header'
import Login from './Pages/Login/Login/Login'
import Register from './Pages/Login/Register/Register';

import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';


import NotFound from './Pages/NotFound/NotFound';
import Inventory from './Pages/Inventory/Inventory';
import AddProduct from './Pages/AddProduct/AddProduct';
import ProductManage from './Pages/ProductManage/ProductManage';
function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        
        <Route path='/manageInventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
       
        <Route path='/product/:productId' element={
          <RequireAuth>
            <ProductManage></ProductManage>
          </RequireAuth>
        }></Route>

        <Route path="/addproduct" element={
          <RequireAuth>
            <AddProduct></AddProduct>
          </RequireAuth>
        }></Route>
        
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
