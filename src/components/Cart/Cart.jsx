import classes from './Cart.module.css'
import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
/* import Button from "../Button/Button" */
import ItemCart from "../ItemCart/ItemCart"

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = () => {
    const { cart, clearCart, removeItem, totalQuantity, total} = useCart()

    /* const handleRemoveItem = (id) => {
        removeItem(id);
        
    }; */

    const handleClearCart = () => {
        clearCart();
        toast.warning('Carrito limpiado');
    };

    return (
        <div className={`${classes.cartContainer}`}>
            <h1>Carrito de compras</h1>
                {cart.length === 0 ? (
                <p>Tu carrito está vacío</p>
                ) : (
                    <>
                        <div>
                        {cart.map(prod => /* {
                            return (
                                <div key={prod.id}>
                                    <h3>{prod.name}</h3>
                                    <img src={prod.img} />
                                    <p>Precio Unitario ${prod.price}</p>
                                    <h4>Cantidad: {prod.quantity}</h4>
                                    <button onClick={handleRemoveItem}>
                                        Remover
                                    </button>
                                </div>
                            )
                        } */ <ItemCart key={prod.id} {...prod} />)}
                        </div>
                            <h3>Cantidad de productos comprados {totalQuantity}</h3>
                            <h3>Precio todal de productos comprados {total}</h3>
                            <button onClick={handleClearCart}>limpiar carrito</button>
                        <Link to='/checkout'>Ir al Checkout</Link>
                    </>
                )}
        </div>
    )
}

export default Cart