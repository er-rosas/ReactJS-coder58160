import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncMock.js'
import ItemList from '../ItemList/ItemList.jsx'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(result => {
                setProducts(result)
            })
    }, [])

    return (
        <>
            <h1 className={`${classes.color}`}>{greeting}</h1>
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer