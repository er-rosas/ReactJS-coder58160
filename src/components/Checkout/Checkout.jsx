import classes from './Checkout.module.css'
import { useState } from "react"
import { useCart } from "../../context/CartContext"
import { getDocs, collection, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig"
/* import FormWithValidationHOC from "../FormWithValidationHOC/FormWithValidation" */
import ContactForm from "../ContactForm/ContactForm"
import SummaryCart from "../SummaryCart/SummaryCart"
import { Link } from "react-router-dom"
import { createAdaptedOrder } from "../../adapters/createAdaptedOrder"


const Checkout = () => {
    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)
    const { cart, totalQuantity, total, clearCart } = useCart()

    const [outOfStockProducts, setOutOfStockProducts] = useState([])

    const createOrder = async (userData) => {
        try {
            setLoading(true)

            /* const objOrder = {
                buyer: {
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    email: userData.email
                },
                items: cart,
                total
            } */
            const formattedOrder = createAdaptedOrder(userData, cart, total);
    
            const batch = writeBatch(db)
            const outOfStock = []
    
            const ids = cart.map(prod => prod.id)
    
            const productsRef = query(collection(db, 'products'), where(documentId(),'in',ids))
    
            // getDocs(productsRef).then(QuerySnapshot => {})
            // const QuerySnapshot = await getDocs(productsRef)
    
            const { docs } = await getDocs(productsRef)
    
            docs.forEach(async documentSnapshot => {
                const fields = documentSnapshot.data()
                const stockDb = fields.stock
    
                const productAddedToCart = cart.find(prod => prod.id === documentSnapshot.id)
                const prodQuantity = productAddedToCart.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(documentSnapshot.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: documentSnapshot.id, ...fields })
                    setOutOfStockProducts(prevProducts => [...prevProducts, { id: documentSnapshot.id, name: fields.name, img: fields.img }])
                }
    
                if(outOfStock.length === 0) {
                    const ordersRef = collection(db, 'orders')
    
                    /* const { id } = await addDoc(ordersRef, objOrder) */
                    const { id } = await addDoc(ordersRef, formattedOrder);
                    batch.commit()
                    clearCart()
                    setLoading(false)
                    setOrderId(id)
                    console.log(`El id de su orden es ${id}`)
                } else {
                    console.log('No hay stock de algun producto')
                    setLoading(false)
                }
            })
            
        } catch (error) {
            console.error('Hubo un error generando la orden')
        } /* finally {
            
        } */
    }

    if(loading) {
        return <div className={`${classes.itemDetailContainer}`}>
        <div className={classes.loader}></div>
    </div>
    }

    if(orderId) {
        return <h1>El id de su orden es: {orderId}</h1>
    }



    return (
        <>
            {outOfStockProducts.length > 0 ? (
            <div>
                <h2>Productos sin stock:</h2>
                <ul>
                    {outOfStockProducts.map(product => (
                        <li key={product.id}>
                            <img src={product.img} alt={product.name} />
                            {product.name} - Sin stock
                        </li>
                    ))}
                </ul>
            </div>
        ) : (
            <>
            <div className={`${classes.linkAtras}`}>
                <Link to='/cart'>Atras</Link>
            </div>
                <h1>Checkout</h1>
                {cart.length === 0 ? (
                    <p>Tu carrito está vacío</p>
                ) : (
                    <div className={`${classes.cartProductsContainer}`}>
                        {cart.map(prod => (
                            <SummaryCart key={prod.id} {...prod} />
                        ))}
                        <h3>Precio total de productos comprados {total}</h3>
                    </div>
                )}
                <h2>Realizar formulario para obtener los datos del usuario, este va a ser un componente orientado a evento</h2>
                <ContactForm onCreate={createOrder} />
            </>
        )}
        </>
    )
}

export default Checkout