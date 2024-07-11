 import { motion } from "framer-motion";
import Link from "next/link";
 
const Home = () => {
  return (
    
     

 
        <motion.div className="home container"
          animate={{opacity:0.5,marginTop:200}}
        >
            <h2>
                Welcome to ARSO Pizza
            </h2>
            <Link href="/base">
                <button>
                    Create Your Pizza
                </button>
            </Link>
         </motion.div>
    );
}

 

export default Home