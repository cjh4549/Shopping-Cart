import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useProductContext } from '../context/ProductContextProvider';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import SingleProduct from '../pages/SingleProduct';
import Error from '../pages/Error';
import Loading from './Loading';

export default function Main() {
    const { getData, isLoading, error } = useProductContext();

    //Might have to change this
    useEffect(() => {
        getData();
    }, []);

    if (isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <main className="p-5">
            <Routes>
                {error && (<Route path="/error" element={<Error />}/>)}
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<SingleProduct />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </main>
    )
}