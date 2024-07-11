"use client"
import Link from "next/link";
import {useState} from "react"

export default function Toppings( ) {
    const [pizza, setPizza] = useState({ base: "", toppings: [] })
    let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes','cucumbers','eggs'];

    const addTopping = (topping) => {
        let newToppings;
        if (!pizza.toppings.includes(topping)) {
          newToppings = [...pizza.toppings, topping];
        } else {
          newToppings = pizza.toppings.filter(item => item !== topping);
        }
        setPizza({ ...pizza, toppings: newToppings });
      }

      
    return (
        <div className="toppings container">

            <h3>Step 2: Choose Toppings</h3>
            <ul>
                {toppings.map(topping => {
                    let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
                    return (
                        <li key={topping} onClick={() => addTopping(topping)}>
                            <span className={spanClass}>{topping}</span>
                        </li>
                    )
                })}
            </ul>
            <Link href="/base">
                <button>
                    Back
                </button>
            </Link>
            <Link href="/order">
                <button>
                    Order
                </button>
            </Link>

        </div>
    )
}
