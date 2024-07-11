 
"use client"
 
import {useState} from "react"
export default function Order() {
    const [pizza, setPizza] = useState({ base: "", toppings: [] })

    return (
        <div className="container order">
            <h2>Thank you for your order :)</h2>
            <p>You ordered a <strong>{pizza.base}</strong> pizza with:</p> 
             {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
        </div>
    )
}
