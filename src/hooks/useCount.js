import { useState } from "react"

export const useCount = (initial = 0) => {
    /* 
    const [quantity, setQuantity] = useState(initial)

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        } 
    }
    
    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        } 
    } */



    const [count, setCount] = useState(initial)

    const decrement = () => {
        setCount(old => old - 1)
    }

    const increment = () => {
        setCount(old => old + 1)
    }

    return {
        count,
        decrement,
        increment
    }
}