import { useProductContext } from '../context/ProductContextProvider';
import CartItem from '../components/CartItem';

export default function Cart(){
    const { state, clearItem } = useProductContext();

    if (state.cart.length === 0) {
        return(
            <section>
                <h2>Your Cart</h2>
                <p>It's current empty!</p>
            </section>
        )
    } else {
        return(
            <section>
                <h2>Your Cart</h2>
                <article>
                {   state.cart.length > 1 ?
                    state.cart.map(item => <CartItem key={item.id} {...item} />)
                    : null
                }
                    CART ITEM{state.cart.length}
                </article>
                <footer>
                    <h4>Total: <span>$</span></h4>
                    <button onClick={() => clearItem()}>Clear Cart</button>
                </footer>
            </section>
        )
    }
}