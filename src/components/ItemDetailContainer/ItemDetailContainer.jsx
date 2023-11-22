import classes from './ItemDetailContainer.module.css'
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/firebase/firestore/products"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    if(loading) {
        return <div className={`${classes.itemDetailContainer}`}>
            <div className={classes.loader}></div>
        </div>
    }

    if(!product) {
        return <h1>El producto no existe</h1>
    }

    return(
        <div className={`${classes.itemDetailContainer}`}>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer