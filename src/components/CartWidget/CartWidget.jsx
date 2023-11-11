import classes from "./CartWidget.module.css"
import cart from "./assets/shopping-cart-black.png"
import { useCart } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'


const CartWidget = () => {
    const { totalQuantity } = useCart()

    const navigate = useNavigate()

    return (
        <button onClick={() => navigate('/cart')} className={`${classes.cartButton}`}>
            <img src={cart} alt="" />
            {totalQuantity}
        </button>
    )
}

export default CartWidget