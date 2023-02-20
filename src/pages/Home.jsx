import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import HomeNav from '../components/HomeNav'
import Jumbo from "../components/Jumbo"
import Stars from "../components/Stars"
import Max from "../components/Max"
import Services from "../components/Services"
import Trainings from "../components/Trainings"
import Choosing from "../components/Choosing"
import WhyCards from "../components/WhyCards"
import Clients from "../components/Clients"
import Waiting from "../components/Waiting"
const Home = () => {
   const navigate = useNavigate()
  return (
     <div>
      <motion.div className="main">
         
      <HomeNav />
        <Jumbo />
        <Stars />
        <Max />
        
      </motion.div>
         <div className="service md:p-5">
           <Services />
             <Trainings />
         </div>

         <div className="choose">
           <Choosing />
           <WhyCards /> 
         </div>

         <div className="clients-section my-10">
               <Clients />
         </div>
         <div className="waitings ">
              <Waiting />
         </div>

         <div className="space mt-20">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas quidem dolor maiores nostrum rem ad aut distinctio. Omnis eos nemo suscipit nobis voluptate esse quasi culpa autem in, ullam libero? Blanditiis nobis, corrupti officiis est excepturi quod amet, repudiandae itaque ex accusantium necessitatibus quis nemo vero. Quia culpa placeat hic.
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