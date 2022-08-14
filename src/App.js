import './index.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { Routes, Route } from 'react-router-dom';
import { useProductContext } from './context/ProductContextProvider';

import Home from './pages/Home';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';
import Error from './pages/Error';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const { error } = useProductContext();

  return (
    <div className={darkTheme ? 'dark' : null}>
      <div className="bg-gray-200 dark:bg-gray-900 dark:text-white">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routes className="p-5">
            {error && (<Route path="/error" element={<Error />}/>)}
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
