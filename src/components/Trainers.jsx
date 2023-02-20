import  {motion} from "framer-motion"
const Trainers = () => {
    return (
        <div className="trainers m-5 p-3 text-black">
             <div className="trainer-grid grid md:grid-cols-3 gap-10">
                 <div className="first-card">
                    <div className="card bg-gray-300 rounded-md shadow-lg p-5">
                        <h1>Zubair Kiyani</h1>
                        <p>Weight Gain Trainer</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, autem!</p>
                        <button>View More</button>
                    </div>
                 </div>
                 <div>
                 <div className="card  bg-gray-300 rounded-md shadow-lg p-5">
                        <h1>Zubair Kiyani</h1>
                        <p>Weight Gain Trainer</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, autem!</p>
                        <button>View More</button>
                    </div>
                 </div>
                 <div>
                 <div className="card  bg-gray-300 rounded-md shadow-lg p-5">
                        <h1>Zubair Kiyani</h1>
                        <p>Weight Gain Trainer</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, autem!</p>
                        <button className="bg-blue-800 rounded-md p-5 font-bold text-white">View More</button>
                    </div>
                 </div>
             </div>
        </div>
    )
}

export default Trainers