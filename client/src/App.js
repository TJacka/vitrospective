import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar'
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import AccessoryPage from './pages/AccessoryPage';
import AccessoriesListPage from './pages/AccessoriesListPage';
import Cart from './pages/Cart';
import TreesListPage from './pages/TreesListPage';
import TreePage from './pages/TreePage';
import Profile from './components/Profile'
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <div id='page-body'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/trees' element={<TreesListPage />} />
            <Route path='/trees/:treeId' element={<TreePage />} />
            <Route path='/accessories' element={<AccessoriesListPage />} />
            <Route path='/accessories/:accessoryId' element={<AccessoryPage />} />
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


