import { Link } from 'react-router-dom';
import { useProductContext } from '../context/ProductContextProvider';

export default function Navbar({ darkTheme, setDarkTheme }){
    const { checkQuantity, cartItems } = useProductContext();

    console.log(cartItems)

    return(
        <header className="px-10 py-5 flex flex-wrap justify-center items-center border-b-2 sm:justify-between dark:border-gray-700 border-gray-200">
            <nav className="w-full">
                <ul className="flex justify-between w-100">
                    <li className="w-5/6">
                        <Link to="/">
                            <span className="rounded-lg text-2xl bg-blue-500 font-bold text-white py-1.5 pt-1 px-2 dark:bg-gray-500 dark:text-gray-900">
                                Awesome Buy
                            </span>
                        </Link>
                    </li>
                    <div className="flex w-1/6 justify-evenly">
                        <li>
                            <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-4 py-1 hover:shadow-lg">
                                {darkTheme ? 'Light 💡' : 'Dark 🌙'}
                            </button>
                        </li>
                        <li>
                            <Link to="/cart" className="flex items-center">
                                <span className="rounded-lg text-xl font-bold text-black hover:shadow-lg py-1 px-2 dark:text-gray-300">
                                    Cart({cartItems.reduce((acc, item) => {
                                        return acc = acc + item.quantity;
                                    }, 0)})
                                </span>
                            </Link>
                        </li>
                    </div>      
                </ul>
            </nav>
        </header>
    )
}