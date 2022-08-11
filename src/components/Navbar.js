import { Link } from 'react-router-dom';

export default function Navbar({ darkTheme, setDarkTheme }){
    return(
        <header className="p-5 flex flex-wrap justify-center items-center border-b sm:justify-between dark:border-gray-700 border-gray-200">
            <nav className="w-full">
                <ul className="flex justify-between w-100">
                    <li>
                        <Link to="/">
                            <span className="rounded-lg text-2xl bg-blue-500 font-bold text-white py-1.5 pt-1 px-2 dark:bg-gray-500 dark:text-gray-900">
                                Shopping Cart
                            </span>
                        </Link>
                    </li>
                    <li>
                        <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-4 py-1 hover:shadow-lg">
                            {darkTheme ? 'Light 💡' : 'Dark 🌙'}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}