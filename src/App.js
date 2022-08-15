import './index.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { Routes, Route } from 'react-router-dom';
import { useProductContext } from './context/ProductContextProvider';

import Main from './pages/Main';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : null}>
      <div className="bg-gray-200 dark:bg-gray-900 dark:text-white overflow-hidden">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routes className="p-5">
            <Route path="/" element={<Main />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
