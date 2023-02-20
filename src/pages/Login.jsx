import React from 'react'
import {motion} from "framer-motion"
import Navbar from '../components/Navbar'
const Login = () => {
  return (
    <div>
      <Navbar />
         <div className="card md:grid md:grid-cols-3 ">
               <div></div>
                 <motion.div
                  initial={{opacity:  0.3}}
                  animate={{opacity: 1}}
                  transition={{delay : 0.2, type : 'spring', duration : 0.7, stiffness : 600}}
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

export default Login