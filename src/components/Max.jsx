import { motion } from "framer-motion"
const Max = () => {
    return (
        <div className="max md:p-10 my-5 text-white">
            <div className="grid md:grid-cols-2 px-10">
                <div className="maxImg">
                    <motion.img 
                       initial={{opacity : 0, x : "-20vw"}}
                       whileInView={{opacity : 1, x : 0}}
                       animate={{delay : 0.1, type : "tween", duration : 0.4}}
                    src="https://assets.website-files.com/60c1736aaad648491e964d73/60c1736aaad6487bbe964db7_Overview-Image.png" alt="" srcset="" />
                </div>
                <motion.div 
                 initial={{opacity : 0, y : "20vw"}}
                 whileInView={{opacity : 1, y : 0}}
                 animate={{delay : 0.1, type : "tween", duration : 0.4}}
                className="lebrone my-5 md:my-0">
                      <div className="md:mt-32">
                        
                    <h1 className="text-5xl font-bold max-font">About Max Lebrone ?</h1> 
                     <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nam vero facilis, repellat rem reprehenderit numquam corrupti praesentium earum id minus necessitatibus nulla? Similique perspiciatis, doloremque amet mollitia, iste enim ipsam tempora facilis non odio sunt quasi quidem reprehenderit cupiditate corporis deserunt eos culpa totam sit laborum ea sequi. Eum.</p>
                      <button className="bn px-10 py-5 mt-5">Learn More</button>
                      </div>
                </motion.div>
            </div>
             </div>
    )
}

export default Max