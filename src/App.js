import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Loginpage from './pages/Loginpage';
import SignUp from './pages/SignUp';
import AdminLogin from './pages/AdminLogin';
import AboutUs from './pages/AboutUs';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import AdminLandingpage from './pages/AdminLandingpage';
import AdminViewusers from './pages/AdminViewusers';
import AdminViewproducts from './pages/AdminViewproducts';


function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/loginpage' element={<Loginpage/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/adminlogin' element={<AdminLogin/>} />
        <Route path='/adminlandingpage' element={<AdminLandingpage/>} />
        <Route path='/productdetails' element={<ProductDetails/>} />

        {/* admin */}
        <Route path='/viewusers' element={<AdminViewusers/>} />
        <Route path='/viewproducts' element={<AdminViewproducts/>} />

        


      </Routes>
      {/* <Footer /> */}

    </>
  );
}

export default App;
