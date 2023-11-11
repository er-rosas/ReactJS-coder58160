import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"

const Cart = () => {
    const { cart, totalProductsAdded, totalToPay, clearCart } = useCart()

    return (
        <div>
            <h1>Cart</h1>
            <div>
                {
                    cart.map(prod => {
                        return (
                            <div key={prod.id}>
                                <h3>{prod.name}</h3>
                                <img src={prod.img} />
                                <p>${prod.price}</p>
                                <h4>Cantidad: {prod.quantity}</h4>
                            </div>
                        )
                    })
                }
            </div>
            <Link to='/checkout'>Checkout</Link>
        </div>
    )
}

export default Cart