import { motion } from "framer-motion"
const Trainings = () => {
    return (
        <div className="trainings grid md:grid-cols-3 md:px-10 gap-5">
         <motion.div
            initial={{y : "-20vw", opacity : 0.3}}
            whileInView={{y : 0, opacity : 1}}
            transition= {{delay : 0.1, type: "tween", duration : 0.3}}
         class="max-w-sm rounded overflow-hidden shadow-lg">
            {/* <img className="w-full" src="../../public/1.jpg" alt="Sunset in the mountains"> */}
            <img src="../../public/training1.jpg" className="w-full " alt="" srcset="" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Pilates Training</div>
                <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet,perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <button className="bn px-10 py-5">Learn More</button>
            </div>
</motion.div>
<div class="max-w-sm rounded overflow-hidden shadow-lg">
            {/* <img className="w-full" src="../../public/1.jpg" alt="Sunset in the mountains"> */}
            <img src="../../public/training2.jpg" className="w-full " alt="" srcset="" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Fitness Training</div>
                <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet,perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <button className="bn px-10 py-5">Learn More</button>
            </div>
</div>
<motion.div 
 initial={{y : "20vw", opacity : 0.3}}
 whileInView={{y : 0, opacity : 1}}
 transition= {{delay : 0.1, type: "tween", duration : 0.3}}
class="max-w-sm rounded overflow-hidden shadow-lg">
            {/* <img className="w-full" src="../../public/1.jpg" alt="Sunset in the mountains"> */}
            <img src="../../public/training3.jpg" className="w-full " alt="" srcset="" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">CrossFit Training</div>
                <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet,perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <button className="bn px-10 py-5">Learn More</button>
            </div>
</motion.div>
        </div>
    )
}

export default Trainings