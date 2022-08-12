import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useProductContext } from '../context/ProductContextProvider';
import Error from '../pages/Error';

export default function Main() {
    const { getData, data, searchTerm, setSearchTerm, isLoading, error } = useProductContext();

    useEffect(() => {
        getData();
    }, []);

    console.log(data);

    return (
        <main className="p-4">
            <Routes>
                {error && (<Route path="/" element={<Error />}/>)}
                <Route path="/" element={<h1>hello</h1>}/>
                {/* <Route path='product/:id' element={<SingleProduct />} /> */}
            </Routes>
        </main>
    )
}