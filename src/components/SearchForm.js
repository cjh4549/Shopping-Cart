import { useProductContext } from '../context/ProductContextProvider';
import { useRef, useEffect } from 'react';

export default function SearchForm(){
    const { searchTerm, setSearchTerm, categories, setCategories } = useProductContext();
    const searchRef = useRef(null);

    useEffect(() => {
        searchRef.current.focus();
    }, [])

    const types = [
        {id: 1, name: 'all'},
        {id: 2, name: "electronics"},
        {id: 3, name: "jewelery"},
        {id: 4, name: "men's clothing"},
        {id: 5, name: "women's clothing"}
    ];

    const handleOptionChange = (e) => {
        setCategories(e.target.value);
        setSearchTerm("");
    }

    return(
        <form className="sm:flex sm:flex-col">
            <label htmlFor="search" className="mr-4 font-bold sm:mb-4">
                Search:
                <input 
                    className="dark:text-black ml-1 p-1 font-normal"
                    ref={searchRef}
                    id="search"
                    name="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </label>
            <label htmlFor="categories" className="font-bold">
                Categories:
                <select
                    className="dark:text-black ml-1 p-1 font-normal bg-white"
                    id="categories"
                    name="category"
                    value={categories}
                    onChange={handleOptionChange}
                >
                    {types.map(({ id, name }) => (
                        <option className="dark:text-black" key={id} value={name}>
                            {name}
                        </option>
                    ))}
                </select>
            </label>    
        </form>
    )
}