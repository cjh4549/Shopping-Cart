import { useState, useEffect, createContext, useContext, useReducer } from "react";
import reducer from './reducer';

const ProductContext = createContext();

const initialState = {
    total: 0,
    amount: 0,
    cart: []
}

export default function ProductContextProvider({ children }){
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [categories, setCategories] = useState('all');

    //useReducer
    
    const [state, dispatch] = useReducer(reducer, initialState); 

    const addItem = (singleProduct) => {
        dispatch({ type: "ADD", payload: singleProduct });
        console.log(state)
    }

    const clearItem = () => {
        dispatch({ type:"CLEAR" });
    }

    //

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
        <ProductContext.Provider 
            value={{ 
                state, 
                clearItem, 
                addItem, 
                baseUrl, 
                getData, 
                data, 
                searchTerm, 
                setIsLoading, 
                setSearchTerm, 
                isLoading, 
                error, 
                setError, 
                setCategories, 
                categories 
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductContext = () => useContext(ProductContext);