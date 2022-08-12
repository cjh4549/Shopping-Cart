import { useProductContext } from '../context/ProductContextProvider';
import { Link } from 'react-router-dom';

export default function Error(){
    const { error } = useProductContext();

    return(
        <section>
            <Link to="/">
                <h2>{error}</h2>
            </Link>
        </section>
    )
}