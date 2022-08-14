import { useState, useEffect, createContext, useContext } from "react";

const ProductContext = createContext();

export default function ProductContextProvider({ children }){
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [categories, setCategories] = useState('all');

    const baseUrl = "https://fakestoreapi.com/products";

    const getData = async () => {
        setIsLoading(true);

        try {
            if (categories === 'all') {
                const response = await fetch(`${baseUrl}`);

                if (!response.ok) {
                    throw new Error(`HTTP Request Error: the status is ${response.status}`);
                }

                let actualData = await response.json();
                setData(actualData);
            } else if (categories !== 'all') {
                const response = await fetch(`${baseUrl}/category/${categories}`);

                if (!response.ok) {
                    throw new Error(`HTTP Request Error: the status is ${response.status}`);
                }

                let actualData = await response.json();
                setData(actualData);
            } 

            setError(null);
        } catch (err) {
            setError(err.message);
            setData([]);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, [searchTerm, categories]);

    return (
        <ProductContext.Provider value={{ baseUrl, getData, data, searchTerm, setIsLoading, setSearchTerm, isLoading, error, setError, setCategories, categories }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductContext = () => useContext(ProductContext);