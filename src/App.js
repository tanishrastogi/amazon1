// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/header/navbar";
import SecondNavbar from './components/secondNavbar/secondNavbar.js';
import MainComponent from './components/home/maincomponent';
import SignUp from './components/signup_sign/signup';
import SignIn from './components/signup_sign/signIn';
import {Route , Routes} from "react-router-dom";
import Footer from './components/footer/footer';
import Cart from "./components/cart/cart"
import BuyNow from './components/buynow/buy_now';

function App() {
  return (
    <div>
      
      
      <Routes>
      <Route path='/' element={<div><Navbar /><SecondNavbar /><MainComponent /><Footer /></div>} />
      <Route path='/login' element={<SignIn />} />
      <Route path='/register' element={<SignUp />} />
      <Route path='/getProducts/:productInfo/:id' element={<div><Navbar /><SecondNavbar /><Cart /><Footer /></div>} />
      <Route path='/buynow' element={<div><Navbar /><SecondNavbar /><BuyNow /><Footer /></div>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
