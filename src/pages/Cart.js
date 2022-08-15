import { useProductContext } from '../context/ProductContextProvider';
import CartItem from '../components/CartItem';

export default function Cart(){
    const { cartItems, clearCart, data } = useProductContext();

    if (cartItems.length < 1) {
        return(
            <section className="px-10 mt-5 text-center">
                <h2 className="font-bold mb-2">Your Cart</h2>
                <p>It's current empty!</p>
            </section>
        )
    } else {
        return(
            <section className="flex flex-col justify-between py-14 px-40 min-h-screen sm:p-6">
                <h2 className="font-bold text-xl mb-8">Your Cart</h2>
                {cartItems.map(item => (
                    <CartItem key={item.id} {...item} />
                ))}
                <footer>
                    <div>
                        <p>Total: ${cartItems.reduce((acc, currentItem) => {
                            const item = data.find(product => product.id == currentItem.id);
                            return acc + (item?.price || 0) * currentItem.quantity;
                        }, 0)}</p>
                    </div>
                    <button className="hover:underline" onClick={() => clearCart()}>Clear Cart</button>
                </footer>
            </section>
        )
    }
}