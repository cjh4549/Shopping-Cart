import './index.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : null}>
      <div className="bg-gray-200 min-h-screen flex flex-col justify-between dark:bg-gray-900 dark:text-white">
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
