import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../context/UserContext"

const Header = () => {
  const {user}=useContext(UserContext)

    return (
      <div className="w-full relative flex py-5 px-6 bg-white items-center justify-between md:px-[-200px] py-4 sm:px-[-100px] py-2">
        <div className="w-full flex relative justify-between items-center">
          <h1 className="text-center hover:text-pink  text-black text-[25px] tracking-[4.37px]"><Link to="/">ART INSPIRE</Link></h1>
            <div className="pr-[30px] flex relative justify-between items-center gap-x-16">
              <h1 className="text-center text-black text-xl hover:animate-bounce tracking-wide hover:text-pink active:text-pink active:bg-blue-600"><Link to="/">HOME</Link></h1>
              <h1 className="text-center text-black text-xl hover:animate-bounce tracking-wide hover:text-pink active:text-pink"><Link to="/About">ABOUT</Link></h1>
              <h1 className="text-center text-black text-xl hover:animate-bounce tracking-wide hover:text-pink active:text-pink"><Link to="/Features">FEATURES</Link></h1> 
              <h1 className="text-center text-black text-xl hover:animate-bounce tracking-wide hover:text-pink active:text-pink"><Link to="/MySpace">MY SPACE</Link></h1> 
              <h1 className="text-xl inline-block px-5 py-3 text-black text-center tracking-wide bg-pink hover:bg-black hover:text-white rounded-lg transition duration-200"><Link to="/Login">LOGIN</Link></h1>
              <h1 className="text-xl inline-block px-5 py-3 text-black text-center tracking-wide bg-pink hover:bg-black hover:text-white rounded-lg transition duration-200"><Link to="/Register">REGISTER</Link></h1>
            </div>
        </div>
      </div>    
    )
  }
  
  export default Header