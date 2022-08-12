import { useState, createContext, useContext } from "react";

const ProductContext = createContext();
const baseUrl = "https://fakestoreapi.com/products";

export default function ProductContextProvider({ children }){
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const getData = async () => {
        setIsLoading(true);

        try {
            const response = await fetch(`${baseUrl}`);

            if (!response.ok) {
                throw new Error(`HTTP Request Error: the status is ${response.status}`)
            }

            let actualData = await response.json();
            setData(actualData);
            setError(null);
        } catch (err) {
            setError(err.message);
            setData(null);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <ProductContext.Provider value={{ getData, data, searchTerm, setSearchTerm, isLoading, error }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductContext = () => useContext(ProductContext);