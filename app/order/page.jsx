"use client"

import { AnimatePresence, motion } from "framer-motion";
import {useState} from "react"

export default function Order() {

    const [pizza, setPizza] = useState({ base: "", toppings: [] })
    const [showTitle,setShowTitle]=useState(true)

    setTimeout(()=>{
        setShowTitle(false)
    },4000)

    return (
        <div className="container order" >
            <AnimatePresence>
{showTitle && (

    <h2>Thank you for your order :)</h2>
)}
            </AnimatePresence>
            <p>You ordered a <strong>{pizza.base}</strong> pizza with:</p> 
             {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
        </div>
    )
}
