import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import Loading from '../components/Loading';
import Error from './Error';
import { useProductContext } from '../context/ProductContextProvider';

export default function SingleProduct(){
    const { id } = useParams();
    const { isLoading, error, singleProductData, getSingleProductData, increaseQuantity, checkQuantity } = useProductContext();

    useEffect(() => {
        getSingleProductData(id)
    }, [id]);
    
    const { description, image, price, title } = singleProductData;

    const quantity = checkQuantity(id);

    if (isLoading) {
        return <Loading />
    } else if (error) {
        return <Error />
    } else {
        return(
            <section className="px-10 sm:px-6">
                <Link to="/">
                    <h2 className="my-5 hover:underline inline">{`< `}Back to Home</h2>
                </Link>
                <article className="flex justify-between py-10 sm:flex-col">
                    <img className="w-1/5 rounded mx-auto sm:w-1/3 sm:mx-0 sm:mb-8" src={image} alt={title} />
                    <div className="w-3/5 sm:w-full pr-20 flex flex-col justify-center items-start">
                        <h3 className="text-xl mb-4">{title}</h3>
                        <p className="mb-2">{description}</p>
                        <p className="mb-2">${price}</p>
                        <div>
                            <button className="hover:underline" onClick={() => increaseQuantity(id)}>Add Item</button>
                            <span> +</span>
                        </div>
                    </div>                    
                </article>
            </section>
        )
    }
}