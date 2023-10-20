import classes from "./CartWidget.module.css"
import cart from "./assets/shopping-cart-black.png"

const CartWidget = () => {
    return (
        <div className="cartButton">
            <img src={cart} alt="" />
            0
            {/* <h2 className={`${classes.color}`}>{greeting}</h2> */}
        </div>
    )
}

export default CartWidget