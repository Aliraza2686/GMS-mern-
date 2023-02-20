
const HomeNav = () => {
    return (
        <div className="nav p-5 text-blue-200 sticky">
         <div className="grid md:grid-cols-4 grid-cols-1 gap-10">
            <div>
                <img src="../../public/logo.svg" alt="" srcset="" />
            </div>
            <div className="col-span-2 font-bold"> 
                <button className="navLinks1 px-3 py-2 rounded-md">Home</button>
                <button className="navLinks px-3 py-2 rounded-md">About</button>
                <button className="navLinks px-3 py-2 rounded-md">Services</button>
                <button className="navLinks px-3 py-2 rounded-md">Blog</button>
                <button className="navLinks px-3 py-2 rounded-md">Contact</button>
            </div>
            <div><button className="bn px-5 py-3">Book Now</button></div>
            <div>
                
            </div>

         </div>
        </div>
    )
}

export default HomeNav