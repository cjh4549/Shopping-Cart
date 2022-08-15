import { useProductContext } from '../context/ProductContextProvider';

export default function SearchForm(){
    const { searchTerm, setSearchTerm, categories, setCategories } = useProductContext();

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
        <form>
            <label htmlFor="search">
                Search:
                <input 
                    className="dark:text-black"
                    id="search"
                    name="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </label>
            <label htmlFor="categories">
                Categories:
                <select
                    className="dark:text-black"
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