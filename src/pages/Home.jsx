import React from 'react'
import {motion} from "framer-motion"
import Navbar from '../components/Navbar'
const Home = () => {
  return (
    <div>
      <Navbar />
         <div className="card md:grid md:grid-cols-3 ">
               <div></div>
                 <motion.div
                  initial={{opacity:  0.3}}
                  animate={{opacity: 1}}
                  transition={{delay : 0.2, type : 'tween', duration : 0.7}}
                 className='form'>
                      <div className="bg-white p-5 mt-20 rounded-md shadow-xl">
                         <h1 className="text-center font-bold text-3xl text-cyan-700">Login</h1>
                         <form>
                            <label className='font-bold'>Email</label>
                            <input type="email" name="" id="" className='bg-gray-300 w-full rounded-md px-2 h-10' placeholder='enter email' />
                            <label  className='font-bold'>Password</label>
                            <input type="password" name="" id="" className='bg-gray-300 w-full rounded-md px-2 h-10'placeholder='enter password' />
                            <button className='w-full hover:bg-blue-500 h-10 rounded-md bg-cyan-800  font-bold text-white mt-3'>Login</button>
                         </form>
                      </div>
                 </motion.div>
               <div>

               </div>
         </div>
    </div>
  )
}

export default Home


// <motion.div
// initial={{y: -200, opacity:0.5}}
// animate={{y:-5, opacity:1}}
// transition={{delay : 0.5, duration: 0.5, type: 'spring', stiffness : 500}}

// className='p-20 bg-cyan-700 rounded-md m-5 '>
// <motion.h1 animate={{ color : "#ff2994", x: 100, fontSize: 50 }}>
// card
// </motion.h1>
// <motion.button

// whileHover={{scale:1.5, textShadow : '0px 0px 8px rgba(255,255,255,255)', boxShadow : '0px 0px 8px rgba(255,255,255,255)'}}
// className="bg-red-700 text-white font-bold px-5 py-2 mt-5 rounded-md">Click</motion.button>
// </motion.div>