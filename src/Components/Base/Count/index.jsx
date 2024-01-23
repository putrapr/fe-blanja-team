// import React from 'react'
import {useState} from "react"
import "./count.css"

const CountButton = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(count - 1)
    }
  return (
    <div id="count">
        <button onClick={handleDecrement} className="me-3 decrement">-</button>
        <span>{count}</span>
        <button onClick={handleIncrement} className="ms-3 increment">+</button>
    </div>
  )
}

export default CountButton