import { useProductContext } from '../context/ProductContextProvider';
import { Link } from 'react-router-dom';
import Loading from './Loading';

export default function ProductList(){
    const { isLoading, data, searchTerm } = useProductContext();

    if (isLoading) {
        return <Loading />
    } 
    else if (data.length < 1) {
        return(
            <div>
                <h2>No matching product was found</h2>
            </div>
        )
    } else {
        return(
            <section>
                <h2>Products</h2>
                <div>
                    {data
                        ?.filter(({ title }) => title.toLowerCase().split(' ').join('').includes(searchTerm.toLowerCase().split(' ').join('')))
                        .map(({ id, title, image, rating:{ rate }, price }) => (
                        <Link to={`/product/${id}`} key={id}>
                            <article>
                                <img src={image} alt={title} />
                                <div>
                                    <h4>{title}</h4>
                                    <p>Rating: {rate}/5</p>
                                    <p>${price}</p>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </section>
        )
    }
}