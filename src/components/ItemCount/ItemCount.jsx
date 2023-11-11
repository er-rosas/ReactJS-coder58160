import classes from './ItemCount.module.css'
import { useCount } from "../../hooks/useCount"

const ItemCount = ({ onAdd }) => {
    const { count, decrement, increment } = useCount(0)

/* const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        } 
    }
    
    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        } 
    } */

    return(
        <div className={`${classes.counter}`}>
            <div className={`${classes.controls}`}>
                <button className={`${classes.button}`} onClick={decrement}>-</button>
                <h4 className={`${classes.number}`}>{count}</h4>
                <button className={`${classes.button}`} onClick={increment}>+</button>
            </div>
            <div>
                {/* <button className={`${classes.buttonAddCart}`} onClick={() => onAdd(count)} disabled={!stock}>
                    Agregar al carrito
                </button> */}
            </div>
        </div>
    )
}

export default ItemCount