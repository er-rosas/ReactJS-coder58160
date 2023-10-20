import Item from "../Item/Item.jsx"

const ItemList = ({ products }) => {
    return (
        <div>
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