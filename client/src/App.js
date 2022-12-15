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
    <BrowserRouter basename='/vitrospective'>
      <div className='app'>
        <div className='nav-lg'>
          <Navbar />
        </div>
        <div className='nav-sm'>
          <NavbarMobile /> 
        </div>
        <div className='page-body'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/jewelry' element={<JewelryListPage />} />
            <Route path='/jewelry/:pieceId' element={<JewelryPage />} />
            <Route path='/beads' element={<BeadsListPage />} />
            <Route path='/beads/:beadId' element={<BeadPage />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/signup' element={<Profile />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;


