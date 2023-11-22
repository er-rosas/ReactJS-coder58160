import classes from './SummaryCart.module.css'
import { useNavigate } from "react-router-dom";


const SummaryCart = ({ id, name, quantity, price, img }) => {
    const navigate = useNavigate()

    return (
        <div className={`${classes.cartProductsContainer2}`} onClick={() => navigate(`/item/${id}`)} cursor='pointer'>
            <div className={`${classes.cartProducts}`}>
                <img src={img} alt="" />
                <h2>
                    {name}
                </h2>
                
                    <p>
                        Quantity: {quantity}
                    </p>
                    <p>
                        ${price}
                    </p>
                    <p>
                        Subtotal: ${price * quantity}
                    </p>
                </div>
        </div>
    );
}

export default SummaryCart