 "use client"
 import { motion } from "framer-motion";
import Link from "next/link";
 
const Home = () => {
  return (
    
     

 
        <div className="home container"    >
            <h2   >
                Welcome to ARSO Pizza
            </h2>
            <Link href="/base">
                <button >
                    Create Your Pizza
                </button>
            </Link>
         </div>
    );
}

 

export default Home