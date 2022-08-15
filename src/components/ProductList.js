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
                <h2 className="text-center my-14 text-2xl font-bold sm:text-left">Products</h2>
                <div>
                    {data
                        ?.filter(({ title }) => title.toLowerCase().split(' ').join('').includes(searchTerm.toLowerCase().split(' ').join('')))
                        .map(({ id, title, image, rating:{ rate }, price }) => (
                        <Link to={`/product/${id}`} key={id}>
                            <article role="productList" className="flex w-1/2 mx-auto mb-8 sm:flex-col sm:w-full">
                                <img className="w-24 object-cover" src={image} alt={title} />
                                <div className="ml-24 flex flex-col justify-center sm:m-0">
                                    <h3 className="text-xl sm:text-base">{title}</h3>
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