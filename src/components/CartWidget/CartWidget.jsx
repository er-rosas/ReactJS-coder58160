import cart from "./assets/shopping-cart-black.png"

const CartWidget = () => {
    return (
        <div className="cartButton">
            <img src={cart} alt="" />
            0
        </div>
    )
}

export default CartWidget