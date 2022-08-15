import { useProductContext } from "../context/ProductContextProvider"

export default function CartItem({ id, image, title, price }) {
    const { removeItem } = useProductContext();

    return(
        <article className="flex">
            <img src={image} alt={title} className="w-24 h-24 rounded-full mx-auto" />
            <div>
                <h4>{title}</h4>
                <p>${price}</p>
                <button onClick={() => console.log(id)}>Remove</button>
            </div>
        </article>
    )
}