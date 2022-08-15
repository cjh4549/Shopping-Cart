import { useState, createContext, useContext, useEffect } from "react";

const getLocalStorage = () => {
    let cartItems = localStorage.getItem('cartItems');
    if(cartItems) {
        return JSON.parse(cartItems);
    } else {
        return [];
    }
}

const ProductContext = createContext(); 

export default function ProductContextProvider({ children }){
    const [data, setData] = useState([]);
    const [singleProductData, setSingleProductData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [categories, setCategories] = useState('all');
    const [cartItems, setCartItems] = useState(getLocalStorage());

    //Local storage
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])

    //Functions for cart actions
    const increaseQuantity = (id) => {
        setCartItems(items => {
            if (items.find(item => item.id === id) == null) {
                return [...items, {id, quantity: 1}]
            } else {
                return items.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item 
                    }
                })
            }
        })
    }

    const decreaseQuantity = (id) => {
        setCartItems(items => {
            if (items.find(item => item.id === id)?.quantity === 1) {
                return items.filter(item => item.id !== id)
            } else {
                return items.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item 
                    }
                })
            }
        })
    }

    const removeItems = (id) => {
        setCartItems(items => {
            return items.filter(item => item.id !== id)
        })
    }

    const clearCart = () => {
        setCartItems([]);
    }

    const baseUrl = "https://fakestoreapi.com/products";

    // API call for all 20 products
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

    // API call for single product details after you've clicked on the item
    const getSingleProductData = async (id) => {
        setIsLoading(true);

        try {
            const response = await fetch(`${baseUrl}/${id}`);

            if (!response.ok) {
                throw new Error(`HTTP Request Error: the status is ${response.status}`);
            }

            let singleProductData = await response.json();
            setSingleProductData(singleProductData);
            setError(null);
        } catch (err) {
            setError(err.message);
            setSingleProductData([]);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <ProductContext.Provider 
            value={{ 
                getData,
                getSingleProductData,
                isLoading,
                data,
                error,
                searchTerm,
                setSearchTerm,
                categories,
                setCategories,
                singleProductData,
                increaseQuantity,
                decreaseQuantity,
                removeItems,
                clearCart,
                cartItems
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductContext = () => useContext(ProductContext);