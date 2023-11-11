// import ItemCount from '../ItemCount/ItemCount'
import { useState } from "react"
import { useCart } from "../../context/CartContext"
import { useNotification } from "../../notification/NotificationContext"

const InputCount = ({ onAdd, stock, initial= 1 }) => {
    const [count, setCount] = useState(initial)

    const handleChange = (e) => {
        if(e.target.value <= stock) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

const ButtonCount = ({ onAdd, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }

    }

    const decrement = () => {
            setCount(count - 1)
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

const ItemDetail = ({ id, name, category, img, price, stock, description }) => {
    const [inputType, setInputType] = useState('button')

    const ItemCount = inputType === 'button' ? ButtonCount : InputCount

    const { addItem, isInCart } = useCart()
    const { setNotification } = useNotification()

    const handleOnAdd = (quantity) => {       
        const productToAdd = {
            id, name, price, quantity
        }

        addItem(productToAdd)
        setNotification('success', `Se agregaron ${quantity} ${name}`)
    }

    return (
        <article>
            <button onClick={() => setInputType(inputType === 'input' ? 'button' : 'input')}>
                Cambiar contador
            </button>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} style={{ width: 100}}/>
            </picture>
            <section>
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Descripción: {description}
                </p>
                <p>
                    Precio: {price}
                </p>
            </section>           
            <footer>
                {
                    isInCart(id) ? (
                        <button>Finalizar Compra</button>
                    ) : (
                        <ItemCount stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail


/* import classes from './ItemDetail.module.css'
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    return (
        <article className={`${classes.prodDetail}`}>
            <picture className={`${classes.image}`}>
                <img src={img} alt={name} />
            </picture>
            <section className={`${classes.detail}`}>
                <h2>
                    {name}
                </h2>
                <p className={`${classes.desc1}`}>
                    Categoria: {category}
                </p>
                <p className={`${classes.desc2}`}>
                    Descripción: {description}
                </p>
                <p className={`${classes.desc3}`}>
                    Precio: ${price}
                </p>
                <div>
                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada' ,quantity)}/>
                </div>
            </section>
        </article>
    )
}

export default ItemDetail */