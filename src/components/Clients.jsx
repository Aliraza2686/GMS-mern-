import { motion } from "framer-motion"
const Clients = () => {
    return (
        <div className="clients">
                 <div className="choosing my-10 py-5 grid md:grid-cols-6">
        <div></div>

        <div className="col-span-4 ser p-5 md:ml-10">
              <h1 className="text-6xl text-blue-900 font-bold md:ml-5">What Our Clients <br /> Say About Us ?</h1>
             
        </div>
        <div  >
            <button className="why-btn  text-white px-10 py-5 md:rounded-md font-bold">Book A Class</button>
        </div>
        <div></div>
        <div></div>
        <div>
           
        </div>
     </div>

       <div className="container">
        <div className="grid md:grid-cols-3 gap-10 p-5">
            <motion.div 
              initial={{ opacity : 0.1, rotate : 45}}
              whileInView={{opacity : 1, rotate : 0}}
              transition= {{delay : 0.3, type: "spring", stiffness : 600, duration : 0.4}}
            className="bg-gray-200 p-5 rounded-md shadow-lg">
                <div className="client-text my-5">
                    <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptate numquam nulla temporibus itaque illo fugiat non, magni, possimus, qui doloribus expedita. Porro, at! "</p>
                </div>
                <div className="client-img grid md:grid-cols-3 my-5">
                     <div>
                        <img className="w-16" src="https://assets.website-files.com/60c1736aaad648491e964d73/60c1736aaad648a843964d96_Avatar%20Carter.png" alt="" />
                     </div>
                     <div className="md:col-span-2">
                        <h1 className="font-bold text-lg">Kilyan Mbappe</h1>
                        <p className="text-slate-500">Los Angeles, CA</p>
                     </div>
                     <div></div>
                </div>
            </motion.div>
            <motion.div
            initial={{ opacity : 0.1, rotate : 45}}
            whileInView={{opacity : 1, rotate : 0}}
            transition= {{delay : 0.3, type: "spring", stiffness : 600, duration : 0.6}}
            className="bg-gray-200 p-5 rounded-md shadow-lg">
                <div className="client-text my-5">
                    <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptate numquam nulla temporibus itaque illo fugiat non, magni, possimus, qui doloribus expedita. Porro, at! "</p>
                </div>
                <div className="client-img grid md:grid-cols-3 my-5">
                     <div>
                        <img className="w-16" src="https://assets.website-files.com/60c1736aaad648491e964d73/60c1736aaad64866d6964d95_Avatar%20Leo.png" alt="" />
                     </div>
                     <div className="md:col-span-2">
                        <h1 className="font-bold text-lg">Leo Messi</h1>
                        <p className="text-slate-500">Los Angeles, CA</p>
                     </div>
                     <div></div>
                </div>
            </motion.div>
            <motion.div
            initial={{ opacity : 0.1, rotate : 45}}
            whileInView={{opacity : 1, rotate : 0}}
            transition= {{delay : 0.3, type: "spring", stiffness : 600, duration : 0.8}}
            className="bg-gray-200 p-5 rounded-md shadow-lg">
                <div className="client-text my-5">
                    <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptate numquam nulla temporibus itaque illo fugiat non, magni, possimus, qui doloribus expedita. Porro, at! "</p>
                </div>
                <div className="client-img grid md:grid-cols-3 my-5">
                     <div>
                        <img className="w-16" src="https://assets.website-files.com/60c1736aaad648491e964d73/60c1736aaad6482257964d94_Avatar%20Marilyn.png" alt="" />
                     </div>
                     <div className="md:col-span-2">
                        <h1 className="font-bold text-lg">Neymar Jr</h1>
                        <p className="text-slate-500">Los Angeles, CA</p>
                     </div>
                     <div></div>
                </div>
            </motion.div>
        </div>
       </div>

        </div>
    )
}

export default Clients