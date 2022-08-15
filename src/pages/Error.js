import { useProductContext } from '../context/ProductContextProvider';
import { Link } from 'react-router-dom';

export default function Error(){
    const { error } = useProductContext();

    return(
        <section>
            <Link to="/">
                <h2 className="px-10 text-center mt-20 font-bold hover:underline">{error}...</h2>
            </Link>
        </section>
    )
}