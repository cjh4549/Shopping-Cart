import { useProductContext } from "../context/ProductContextProvider"

export default function CartItem({ id, quantity }) {
    const { removeItems, data, decreaseQuantity, increaseQuantity } = useProductContext();
    const item = data.find(product => product.id == id)

    if (item == null) {
        return <h2>Nothing matched</h2>
    } else {
        return(
            <article className="flex mb-4 sm:flex-col">
                <img className="max-w-xl w-28" src={item.image} alt={item.title} />
                <aside className="ml-20 sm:ml-0 sm:mt-6 sm:mb-10">
                    <h3>{item.title}</h3>
                    <p>
                        <button className="font-bold mr-2" onClick={() => decreaseQuantity(id)}>-</button>
                        <span>Quantity: {quantity}</span>
                        <button className="font-bold ml-2" onClick={() => increaseQuantity(id)}>+</button>
                    </p>
                    <p>${item.price}</p>
                    <p>Total: ${item.price * quantity}</p>
                    <button className="hover:underline" onClick={() => removeItems(id)}>Remove</button>
                </aside> 
            </article>
        )
    }
}