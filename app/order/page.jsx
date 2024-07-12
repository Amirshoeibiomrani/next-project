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
        <motion.div className="container order" 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        >
            <AnimatePresence>
{showTitle && (

    <motion.h2
        exit={{y:'-1000px'}}
    >Thank you for your order :)</motion.h2>
)}
            </AnimatePresence>
            <p>You ordered a <strong>{pizza.base}</strong> pizza with:</p> 
             {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
        </motion.div>
    )
}
