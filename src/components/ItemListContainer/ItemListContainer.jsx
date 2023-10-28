import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock.js'
import ItemList from '../ItemList/ItemList.jsx'

import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return (
        <>
            <h1>{!categoryId ? greeting : (greeting + categoryId)}</h1>
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer