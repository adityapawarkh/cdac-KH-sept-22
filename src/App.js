
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import Homemain from './components/Homemain';
import Aboutmain from './components/Aboutmain';
import Contactmain from './components/Contactmain';
import Shop from './components/Shop';
import Shopdet from './components/Shopdet';
import Blog from './components/Blog';
import Cart from './components/Cart';


function App() {
  return <BrowserRouter>
  <Navbar></Navbar>
  <Routes>
    <Route path="/" element={<Homemain />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/shopdet" element={<Shopdet />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/about" element={<Aboutmain />} />
    <Route path="/contact" element={<Contactmain />} />
  </Routes>
  <Newsletter></Newsletter>
  <Footer></Footer>
  </BrowserRouter>;
}

export default App;
