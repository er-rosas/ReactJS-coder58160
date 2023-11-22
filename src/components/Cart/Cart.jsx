import classes from './Cart.module.css'
import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
/* import Button from "../Button/Button" */
import ItemCart from "../ItemCart/ItemCart"

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = () => {
    const { cart, clearCart, removeItem, totalQuantity, total} = useCart()

    const handleClearCart = () => {
        clearCart();
        toast.warning('Carrito limpiado');
    };

    return (
        <div className={`${classes.cartContainer}`}>
            <h1>Carrito de compras</h1>
                {cart.length === 0 ? (
                <p className={`${classes.totalPrecio}`}>Tu carrito está vacío</p>
                ) : (
                    <>
                        <div className={`${classes.cartProductsContainer}`}>
                        {cart.map(prod => <ItemCart key={prod.id} {...prod} />)}
                        </div>
                        <h3 className={`${classes.totalProductos}`}>Total productos: {totalQuantity}</h3>
                        <h3 className={`${classes.totalPrecio}`}>Total: US$ {total}</h3>
                        <button className={`${classes.limpiarCarrito}`} onClick={handleClearCart}>limpiar carrito</button>
                        <Link className={`${classes.irCheckout}`} to='/checkout'>Ir al Checkout</Link>
                    </>
                )}
        </div>
    )
}

export default Cart