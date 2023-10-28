import classes from './Item.module.css'
import { Link } from "react-router-dom"

const Item = ({ id, name, img, price }) => {
    return (
        <div className={`${classes.product}`}>
            <h2>{name}</h2>
            <img src={img}/>
            <h3>${price}</h3>
            <Link to={`/item/${id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item