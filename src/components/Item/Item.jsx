import classes from './Item.module.css'
import { Link } from "react-router-dom"

const Item = ({ id, name, img, price }) => {
    return (
        <div className={`${classes.product}`}>
            <img src={img}/>
            <h2>{name}</h2>
            <h3>${price}</h3>
            <Link to={`/item/${id}`}>Ver detalle</Link>
        </div>
        /*  <Link className={ stock > 0 ? 'card' : 'card card--nostock' } to={`/producto/${ id }`}>
            <img className="card__image" src={ imagen } alt={ nombre } />
            <p className="card__price">${ precio }</p>
            <h2 className="card__title">{ nombre }</h2>
            { 
                envio === true 
                ?  <ShippingWidget/> 
                : null
            }
        </Link> */
    )
}

export default Item