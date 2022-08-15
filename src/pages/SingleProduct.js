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

    console.log(quantity);

    if (isLoading) {
        return <Loading />
    } else if (error) {
        return <Error />
    } else {
        return(
            <section className="px-10">
                <Link to="/">
                    <h2 className="my-5">Back to Home</h2>
                </Link>
                <article className="flex py-10 ">
                    <img className="w-2/12 rounded mx-auto" src={image} alt={title} />
                    <div className="pr-28 w-5/12">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <p>${price}</p>
                        <button onClick={() => increaseQuantity(id)}>Add Item +</button>
                    </div>                    
                </article>
            </section>
        )
    }
}