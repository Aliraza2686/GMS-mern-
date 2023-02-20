import { motion } from "framer-motion"
const Stars = () => {
    return (
        <div className="stars p-10 my-5 text-white">
        <div className="grid md:grid-cols-3 gap-10 md:gap-0">
              <div>
                 <motion.h1
                  initial={{opacity : 0, rotateY : 60}}
                  whileInView={{opacity : 1, rotateY : 0}}
                  transition={{delay : 0.3, type : "spring", duration : 0.7}}
                 className="md:text-center font-bold"> <span className="bg-red-700 p-1 rounded-md text-white">&#10004;</span> Affordable Training & Eating Plans</motion.h1>
              </div>
              <div>
                 <motion.h1 
                  initial={{opacity : 0, rotateY : 60}}
                  whileInView={{opacity : 1, rotateY : 0}}
                  transition={{delay : 0.3, type : "spring", duration : 0.7}}
                 className="md:text-center font-bold"> <span className=" bg-red-700 p-1 rounded-md text-white">&#10004;</span> 14 Day Free Return on Purchase</motion.h1>
              </div>
              <div>
                <motion.h1 
                 initial={{opacity : 0, rotateY : 60}}
                 whileInView={{opacity : 1, rotateY : 0}}
                 transition={{delay : 0.3, type : "spring", duration : 0.7}}
                className="md:text-center font-bold"> <span className=" bg-red-700 p-1 rounded-md text-white">&#10004;</span> 5 Star Rated Personal Trainer</motion.h1>
              </div>
         </div>
        </div>
    )
}

export default Stars