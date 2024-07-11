 "use client"
 import { motion } from "framer-motion";
import Link from "next/link";
 
const Home = () => {
  return (
    
     

 
        <motion.div className="home container"
          animate={{opacity:0.2,marginTop:200}}
        >
            <motion.h2 
              animate={{fontSize:'50px', color:"#ff2994"}}
            >
                Welcome to ARSO Pizza
            </motion.h2>
            <Link href="/base">
                <motion.button 
                  initial={{rotateZ:180,scale:0,duration:3000}}
                 animate={{rotateZ:0,scale:4.5,duration:2000}}
                 >
                    Create Your Pizza
                </motion.button>
            </Link>
         </motion.div>
    );
}

 

export default Home