import { Link, useNavigate } from "react-router-dom";
import { useContext,useState } from "react";
import axios from "axios"
import { URL } from "../url"
import { UserContext } from "../context/UserContext"


const Login = () => {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState(false)
  const {setUser}=useContext(UserContext)
  const navigate=useNavigate()

  const handleLogin=async()=>{
    try{
      const res=await axios.post(URL+"/api/auth/login",{email,password},{withCredentials:true})
      setUser(res.data)
      navigate("/MySpace")

    }
    catch(err){
      setError(true)
      console.log(err)

    }

  }
    return (
      <div className="w-full flex justify-center items-center h-[70vh]">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold text-left"> Log in to your Account!</h1>
          <input onChange={(e)=>setEmail(e.target.value)} className="w-full px-4 py-2 border-[1px] border-black outline-0" type="text" placeholder="Enter your Email"/>
          <input onChange={(e)=>setPassword(e.target.value)}  className="w-full px-4 py-2 border-[1px] border-black outline-0" type="password" placeholder="Enter your Password"/>
          <button onClick={handleLogin} className="w-full px-4 py-4 text-lg font-bold text-white bg-pink rounded-lg hover:bg-black hover:text-white">LOG IN</button>
          {error && <h3 className="text-red text-sm ">Something went wrong</h3>}
          <div className="flex justify-center items-center space-x-4">
            <p>New here?</p>
            <p className="text-grey hover:text-black"><Link to="/Register">Register</Link></p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Login