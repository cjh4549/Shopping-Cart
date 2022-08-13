import { useProductContext } from '../context/ProductContextProvider';

export default function SearchForm(){
    const { setSearchTerm, setCategories, categories } = useProductContext();

    const types = [
        {id: 1, name: 'all'},
        {id: 2, name: "electronics"},
        {id: 3, name: "jewelery"},
        {id: 4, name: "men's clothing"},
        {id: 5, name: "women's clothing"}
    ];

    return(
        <form>
            <label>
                Search:
                <input className="dark:text-black"/>
            </label>
            <label htmlFor="categories">
                Categories:
                <select
                    className="dark:text-black"
                    id="categories"
                    value={categories}
                    onChange={(e) => {setCategories(e.target.value)}}
                >
                    {/* <option /> */}
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