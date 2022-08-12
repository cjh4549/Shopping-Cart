import { useProductContext } from '../context/ProductContextProvider';

export default function Error(){
    const { error } = useProductContext();

    return(
        <section>
            <h2>{error}</h2>
        </section>
    )
}