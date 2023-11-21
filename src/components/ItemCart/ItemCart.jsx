import classes from './ItemCart.module.css'
import { useNavigate } from "react-router-dom";

import { useCart } from "../../context/CartContext";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
    
const ItemCart = ({ id, name, quantity, price, img }) => {
    const navigate = useNavigate()

    const { removeItem } = useCart()

    const handleRemoveItem = (e) => {
        e.stopPropagation()
        removeItem(id)
        toast.success(`Se eliminó ${quantity} ${name} del carrito`);
    }

    return (
        <div className={`${classes.cartProductsContainer}`} onClick={() => navigate(`/item/${id}`)}>
            <div className={`${classes.card}`}>
                <h2>
                    {name}
                </h2>
                <img src={img} alt="" />
                <p>
                    Quantity: {quantity}
                </p>
                <p>
                    ${price}
                </p>
                <p>
                    Subtotal: ${price * quantity}
                </p>
                <button onClick={handleRemoveItem}>
                    Remove
                </button>
            </div>
                {/* <button onClick={handleRemoveItem}>
                        Remove
                </button> */}
        </div>
    );
}

export default ItemCart