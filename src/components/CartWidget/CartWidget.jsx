import classes from "./CartWidget.module.css"
import cart from "./assets/shopping-cart-black.png"

const CartWidget = () => {
    return (
        <div className={`${classes.cartButton}`}>
            <img src={cart} alt="" />
            0
        </div>
    )
}

export default CartWidget