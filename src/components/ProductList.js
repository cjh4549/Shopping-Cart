import { useProductContext } from '../context/ProductContextProvider';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import Error from '../pages/Error';

export default function ProductList(){
    const { isLoading, error, data, searchTerm, categories, getData } = useProductContext();

    useEffect(() => {
        getData();
    }, [searchTerm, categories])

    if (isLoading) {
        return <Loading />
    } 
    else if (error) {
        return <Error />
    } else {
        return(
            <section>
                <h2 className="text-center my-10 text-xl font-bold">Products</h2>
                <div>
                    {data
                        ?.filter(({ title }) => title.toLowerCase().split(' ').join('').includes(searchTerm.toLowerCase().split(' ').join('')))
                        .map(({ id, title, image, rating:{ rate }, price }) => (
                        <Link to={`/product/${id}`} key={id}>
                            <article>
                                <img className="w-24 h-24 rounded" src={image} alt={title} />
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