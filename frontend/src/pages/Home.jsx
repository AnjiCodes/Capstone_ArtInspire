import { Link } from "react-router-dom"

const Home = () => {
    return (
      <div className="h-full flex-row flex items-center justify-center">
        <div className="flex-row flex px-28 py-28">
          <div>
            <img className="w-[400px] h-[400px]" src="/images/Homepageimage.png" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="w-96 h-48 font-extralight text-black text-8xl tracking-widest">ART INSPIRE</h1>
            <h1 className="pt-3 w-96 h-24 text-pink text-2xl">SAY GOODBYE TO YOUR CREATIVE BLOCK!</h1>
            <div className="pr-72"><h1 className="text-xl inline-block px-5 py-3 text-black text-center tracking-wide bg-white hover:bg-pink hover:text-white rounded-lg transition duration-200"><Link to="/Register">JOIN NOW</Link></h1></div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Home