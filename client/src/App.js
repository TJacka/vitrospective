import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import NavbarMobile from './components/NavbarMobile'
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import BeadPage from './pages/BeadPage';
import BeadsListPage from './pages/BeadsListPage';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import JewelryListPage from './pages/JewelryListPage';
import JewelryPage from './pages/JewelryPage';
import Profile from './components/Profile'
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <div className='nav-lg'>
          <Navbar />
        </div>
        <div className='nav-sm'>
          <NavbarMobile /> 
        </div>
        <div className='page-body'>
          <Routes>
            <Route path='/reactecommercestore/reactecommercestore/' element={<Home />} />
            <Route path='/reactecommercestore/reactecommercestore/about' element={<About />} />
            <Route path='/reactecommercestore/reactecommercestore/jewelry' element={<JewelryListPage />} />
            <Route path='/reactecommercestore/reactecommercestore/jewelry/:pieceId' element={<JewelryPage />} />
            <Route path='/reactecommercestore/reactecommercestore/beads' element={<BeadsListPage />} />
            <Route path='/reactecommercestore/reactecommercestore/beads/:beadId' element={<BeadPage />} />
            <Route path='/reactecommercestore/reactecommercestore/contact' element={<Contact />} />
            <Route path='/reactecommercestore/reactecommercestore/cart' element={<Cart />} />
            <Route path='/reactecommercestore/reactecommercestore/signup' element={<Profile />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;


