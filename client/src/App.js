import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import NavbarMobile from './components/NavbarMobile'
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import SingleBeadPage from './pages/SingleBeadPage';
import SingleBeadsListPage from './pages/SingleBeadsListPage';
import Cart from './pages/Cart';
import JewelryListPage from './pages/JewelryListPage';
import JewelryPage from './pages/JewelryPage';
import Profile from './components/Profile'
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
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
            <Route path='/singlebeads' element={<SingleBeadsListPage />} />
            <Route path='/singlebeads/:beadId' element={<SingleBeadPage />} />
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


