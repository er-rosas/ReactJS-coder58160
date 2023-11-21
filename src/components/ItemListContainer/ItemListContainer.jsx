import classes from './ItemListContainer.module.css'
/* import { useState, useEffect } from 'react' */

import { memo } from 'react'
import { useAsync } from '../../hooks/useAsync.js'
/* import { getProducts, getProductsByCategory } from '../../asyncMock.js' */
import ItemList from '../ItemList/ItemList.jsx'
/* import Loader from '../Loader/Loader.jsx' */
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/firebase/firestore/products'


const MemoizedItemList = memo(ItemList) // En este cazo no seria tan necesario, pero la agrego tener la herramienta en uso.

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams()

    const asyncFunction = () => getProducts(categoryId)//categoryId ? getProductsByCategory(categoryId) : getProducts()

    const { data: products, loading, error } = useAsync(asyncFunction, [categoryId])

    if(loading) {
        return <div className={`${classes.itemListContainer}`}>
            <div className={classes.loader}></div>
        </div>
    }

    if(error) {
        return <h1>Hubo un error al cargar los productos</h1>
    }

    if(products.length === 0) {
        return <h1>No existen productos para esta categoria</h1>
    }


    /* const [products, setProducts] = useState([])

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
    }, [categoryId]) */

    return (
        <div className={`${classes.itemListContainer}`}>
            <h1>{!categoryId ? greeting : (greeting + categoryId)}</h1>
            <MemoizedItemList products={products}/>
        </div>
    )
}

export default ItemListContainer