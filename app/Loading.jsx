"use client"

import { motion } from "framer-motion"


const Loading = () => {
    const loaderVariants={
        animationOne:{
            x:[-20,20],
            y:[0,-30],
            transition:{
                x:{
                    duration:0.5,
                    repeatType:"mirror",
                    repeat:Infinity
                },
                y:{
                    duration:0.25,
                    repeatType:"mirror",
                    repeat:Infinity,
                    ease:"easeOut"
                },
            }
        }
    }
  return (
    <motion.div className="w-2.5 h-2.5 my-10 mx-auto rounded-[50%] bg-[#fff]"
    variants={loaderVariants}
    animate="animationOne"
    >
         
        </motion.div>
  )
}

export default Loading