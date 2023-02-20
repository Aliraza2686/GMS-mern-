import React from 'react'
import {motion} from "framer-motion"
const Navbar = () => {
  return (
    <motion.div className='bg-cyan-700 py-5 px-3 w-full '>
         <motion.h1
        initial={{x: '100vw', opacity : 0.5}}
        animate={{x: 0, opacity: 1}}
        transition={{delay : 0.1, type: 'tween', duration: 0.5}}
         className='text-yellow-500 font-bold'>Gym Management System</motion.h1>
    </motion.div>
  )
}

export default Navbar
