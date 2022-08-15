import { useProductContext } from "../context/ProductContextProvider"

export default function CartItem({ id, quantity }) {
    const { removeItems, data, decreaseQuantity, increaseQuantity } = useProductContext();
    const item = data.find(product => product.id == id)

    const { title, image, price } = item;

    if (item == null) {
        return <h2>Nothing matched</h2>
    } else {
        return(
            <article className="flex">
                <img className="max-w-xl w-28" src={image} alt={title} />
                <aside className="ml-20">
                    <h3>{title}</h3>
                    <p>
                        <button className="font-bold mr-2" onClick={() => decreaseQuantity(id)}>-</button>
                        <span>Quantity: {quantity}</span>
                        <button className="font-bold ml-2" onClick={() => increaseQuantity(id)}>+</button>
                    </p>
                    <p>${price}</p>
                    <p>Total: ${price * quantity}</p>
                    <button className="hover:underline" onClick={() => removeItems(id)}>Remove</button>
                </aside> 
            </article>
        )
    }
}