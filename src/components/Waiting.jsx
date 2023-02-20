import { motion } from "framer-motion"
const Waiting = () => {
    return (
        <div className="waiting grid md:grid-cols-10 text-white ">
             <div></div>
              <motion.div
               initial={{ opacity : 0.1, x:"-40vw"}}
               whileInView={{opacity : 1, x : 0}}
               transition= {{delay : 0.3, type: "tween", duration : 0.4}}
              className="col-span-8 waiting-card w-full rounded-md">
                   <div className="grid md:grid-cols-2">
                       <div className="waiting-left-side ">
                           <div className="waiting-left p-10">
                           <h1 className="text-6xl font-bold">What Are You Waiting For</h1>
                            <p className="my-5 text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. At rem exercitationem numquam incidunt. Fuga dicta ea, sequi deserunt ad odit. Autem repellendus dolor velit perspiciatis quidem dolorum, aliquam sunt rerum.</p>
                             <button className="rounded-md hover:bg-black hover:text-white bg-orange-400 font-bold text-black px-10 py-5">Contact Us</button>
                           </div>
                       </div>
                       <div className="waiting-right">

                       </div>
                   </div>
              </motion.div>
             <div></div>
        </div>
    )
}

export default Waiting