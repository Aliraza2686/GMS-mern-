import { motion } from "framer-motion"
const Jumbo = () => {
    return (
        <div className="jumbo text-white mt-3">
               <div className="grid md:grid-cols-2">
                <div className="p-5 md:px-40 jumbo-left">
                    <h1 className="text-blue-200 font-bold">Everest Team</h1> <br />
                    <motion.h1 className="text-5xl font-bold" 
                     initial={{x : "-20vw", opacity : 0.3}}
                     whileInView={{x : 0, opacity : 1}}
                     transition= {{delay : 0.1, type: "tween", duration : 0.7}}
                    >
                        The Ultimate Online Personal Training Plans!
                    </motion.h1>
                    <p className="my-5 text-gray-500 max-font">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, doloribus?</p>
                    <div className="btns mt-5">
                        <button className="bg-yellow-300 text-black font-bold rounded-md px-5 py-3">Book A Class</button>
                         <span className="px-3 md:my-3"></span>
                        <button className="navLinks1 font-bold rounded-md px-5 py-3">About Team</button>
                    </div>
                </div>
                <div>
                    <motion.div
                     initial={{x:'50vw', opacity: 0.5}}
                      animate={{x : 0, opacity : 1}}
                     transition = {{delay : 0.1, type : "tween", duration : 0.5}}
                    className="imgwrapper navLinks1 w-full md:w-96 rounded-md">
                          <img  src="https://assets.website-files.com/60c1736aaad648491e964d73/60c1736aaad6488485964db8_Gym-Header-Image-p-800.png" alt="" srcset="" />    
                    </motion.div>
                   </div>
               </div>
        </div>

       
    )
}

export default Jumbo