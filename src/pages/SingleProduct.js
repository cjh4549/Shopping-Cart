import { useParams, Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { useEffect, useState } from 'react';
import { useProductContext } from '../context/ProductContextProvider';

export default function SingleProduct(){
    const { id } = useParams();
    const { setIsLoading, isLoading, baseUrl, setError, setCategories } = useProductContext();
    const [singleData, setSingleData] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        const getSingleProductData = async () => {
            try {
                const response = await fetch(`${baseUrl}/${id}`);

                if (!response.ok) {
                    throw new Error(`HTTP Request Error: the status is ${response.status}`);
                }

                let singleProductData = await response.json();
                setSingleData(singleProductData);
                setError(null);
            } catch (err) {
                setError(err.message);
                setSingleData([]);
            } finally {
                setIsLoading(false);
            }
        }

        getSingleProductData();
        setCategories('');
    }, [id])
    
    const { description, image, price, title} = singleData;

    if (isLoading) {
        return <Loading />
    } else {
        return(
            <section>
                <Link to="/">
                    <h2>Back to Home</h2>
                </Link>
                <article className="flex">
                    <img src={image} alt={title} />
                    <div>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <p>${price}</p>
                        <button>Add +</button>
                    </div>                    
                </article>
            </section>
        )
    }
}