import classes from './ItemList.module.css'
import Item from "../Item/Item.jsx"

const ItemList = ({ products }) => {
    return (
        <div className={`${classes.productContainer}`}>
            {
                products.map(prod => {
                    return (
                        <Item key={prod.id} {...prod}/>
                    )
                })
            }
        </div>
    )
}

export default ItemList