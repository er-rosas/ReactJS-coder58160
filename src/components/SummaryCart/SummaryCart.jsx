import { useNavigate } from "react-router-dom";


const SummaryCart = ({ id, name, quantity, price, img }) => {
    const navigate = useNavigate()

    return (
        <div onClick={() => navigate(`/item/${id}`)} cursor='pointer'>
            <div>
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
                    </div>
        </div>
    );
}

export default SummaryCart