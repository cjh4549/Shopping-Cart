import { useProductContext } from '../context/ProductContextProvider';
import CartItem from '../components/CartItem';

export default function Cart(){
    const { state: {cart, uniqueCart}, clearItem, quantity, getTotal } = useProductContext();

    console.log(cart);

    if (uniqueCart.length === 0) {
        return(
            <section>
                <h2>Your Cart</h2>
                <p>It's current empty!</p>
            </section>
        )
    } else {
        return(
            <section className="p-10">
                <h2>Your Cart</h2>
                <article>
                {   uniqueCart?.length > 1 ?
                    uniqueCart.map(item => <CartItem key={item.id} {...item} />)
                    : null
                }
                    <div>
                        <p>Number of Items: {quantity}</p>
                        <p>Total Price: ${getTotal}</p>
                    </div>
                </article>
                <footer>
                    {/* <h4>Total: <span>${total}</span></h4> */}
                    <button onClick={() => clearItem()}>Clear Cart</button>
                </footer>
            </section>
        )
    }
}