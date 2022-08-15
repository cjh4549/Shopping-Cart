import { useEffect } from 'react';
import { useProductContext } from '../context/ProductContextProvider';

export default function useResetProducts() {
    const { setCategories, getData } = useProductContext();

    useEffect(() => {
        setCategories('all');
        getData();
    }, [])  
}