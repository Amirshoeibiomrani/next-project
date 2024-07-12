"use client"
import Link from "next/link";
import {useState} from "react"
import Loading from "../Loading";
export default function Base() {

    const [pizza, setPizza] = useState({ base: "", toppings: [] })
    const bases = ['Classic', 'Thin & Crispy', 'Thick Crust','Chicken','Meat','Vegetables'];

    const addBase = (base) => {
        setPizza({ ...pizza, base })
      }
    // addBase([])

    return (
        <div className="base container">

            <h3>Step 1: Choose Your Base</h3>
            <ul>
                {bases.map(base => {
                    let spanClass = pizza.base === base ? 'active' : '';
                    return (
                        <li key={base} onClick={() => addBase(base)}>
                            <span className={spanClass}>{base}</span>
                        </li>
                    )
                })}
            </ul>

            {pizza.base && (
                <div className="next">
                    <Link href="/">
                        <button>Back</button>
                    </Link>
                    <Link href="/toppings">
                        <button>Next</button>
                    </Link>
                    <Loading />
                </div>
            )}

        </div>
    );
}
