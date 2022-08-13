import { Routes, Route } from 'react-router-dom';
import { useProductContext } from '../context/ProductContextProvider';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import SingleProduct from '../pages/SingleProduct';
import Error from '../pages/Error';

export default function Main() {
    const { error } = useProductContext();
    
    return (
        <div className="p-5">
            <Routes>
                {error && (<Route path="/error" element={<Error />}/>)}
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<SingleProduct />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    )
}