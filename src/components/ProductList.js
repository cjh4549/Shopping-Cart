import { useProductContext } from '../context/ProductContextProvider';
import Loading from './Loading';

export default function ProductList(){
    const { isLoading, data } = useProductContext();

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
                Product List
            </section>
        )
    }
}