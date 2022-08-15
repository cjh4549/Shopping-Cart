import { useState, useEffect, createContext, useContext, useReducer } from "react";
import reducer from './reducer';

const ProductContext = createContext(); 

export default function ProductContextProvider({ children }){
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [categories, setCategories] = useState('all');
    const [singleData, setSingleData] = useState([]);

    //useReducer/////////////////////////////////////////////
    
    const [state, dispatch] = useReducer(reducer, {
        total: 0,
        quantity: 0,
        cart: [data]
    }); 

    const addCart = (data) => {
        dispatch({ type: "ADD_CART", payload: data })
    }

    const addItem = (singleData, id) => {
        dispatch({ type: "ADD_ITEM", payload: id});
    }

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
    }

    const clearItem = () => {
        dispatch({ type:"CLEAR_CART" });
    }

    const getTotal = () => {
        dispatch({ type: "GET_TOTAL" });
    }

    ////////////////////////////////////////////////////////////

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
    }, [])

    console.log(data);

    const getSingleProductData = async (id) => {
        setIsLoading(true);

        try {
            const response = await fetch(`${baseUrl}/${id}`);

            if (!response.ok) {
                throw new Error(`HTTP Request Error: the status is ${response.status}`);
            }

            let singleProductData = await response.json();
            setSingleData(singleProductData);
            setError(null);
        } catch (err) {
            setError(err.message);
            setSingleData([]);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <ProductContext.Provider 
            value={{ 
                state, 
                singleData,
                getTotal,
                removeItem,
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
                categories,
                getSingleProductData
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductContext = () => useContext(ProductContext);