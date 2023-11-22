import classes from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from "react"
import { useCart } from "../../context/CartContext"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link } from "react-router-dom";
import { Navigate, useNavigate } from 'react-router-dom';

const InputCount = ({ onAdd, stock, initial= 1 }) => {
    const [count, setCount] = useState(initial)

    const handleChange = (e) => {
        if(e.target.value <= stock) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input className={`${classes.inputAddCart}`} type='number' onChange={handleChange} value={count}/>
            <button className={`${classes.buttonAddCart}`} onClick={() => onAdd(count)}>Agregar al carrito</button>
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
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div className={`${classes.counter}`}>
            <div className={`${classes.controls}`}>
                <button className={`${classes.button}`} onClick={decrement}>-</button>
                <p className={`${classes.number}`}>{count}</p>
                <button className={`${classes.button}`} onClick={increment}>+</button>
            </div>
            <button className={`${classes.buttonAddCart}`} onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

const ItemDetail = ({ id, name, category, img, price, stock, description }) => {
    const [inputType, setInputType] = useState('button')

    const ItemCount = inputType === 'button' ? ButtonCount : InputCount

    const { addItem, isInCart } = useCart()

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity, img
        }

        addItem(productToAdd)
        toast.success(`Se agregaron ${quantity} ${name}`, { position: toast.POSITION.TOP_RIGHT, style: {
            fontSize: "16px"
            }
        });
    }

    const navigate = useNavigate()

    return (
        <>
            <div className={`${classes.linkAtras}`}>
                <Link to='/'>Atras</Link>
            </div>
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
                        {stock === 0 ? (
                            <h2>No hay stock</h2>
                        ) : (
                            isInCart(id) ? (
                                <button className={`${classes.buttonAddCart}`} onClick={() => navigate('/cart')}>Finalizar Compra</button>
                            ) : (
                                <div>
                                    <button className={`${classes.buttonAddCart}`} onClick={() => setInputType(inputType === 'input' ? 'button' : 'input')}>
                                        Cambiar contador
                                    </button>
                                    <ItemCount stock={stock} onAdd={handleOnAdd} />
                                </div>
                            )
                        )}
                    </div>
                </section>
                <section>

                </section>
            </article></>
    )
}

export default ItemDetail