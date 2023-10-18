import { Link, useNavigate } from "react-router-dom";
import { useState } from "react"
import axios from 'axios'
import {URL} from '../url'

const Register = () => {

  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState(false);
  const navigate=useNavigate()

  const handleRegister=async ()=>{
    try{
      const res=await axios.post(URL+"/api/auth/register",{username,email,password}) 
      setUsername(res.data.username)
      setEmail(res.data.email)
      setPassword(res.data.password)
      setError(false)
      navigate("/Login")
    }
    catch(err)
    {
      setError(true)
      console.log(err)
    }
  }



    return (
      <>
      <div className="w-full flex justify-center items-center h-[80vh]">
        <div className="flex flex-col justofy-center items-center space-y-4 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold text-left"> Create an account!</h1>
          <input onChange={(e)=>setUsername(e.target.value)} className="w-full px-4 py-2 border-[1px] border-black outline-0" type="text" placeholder="Enter your Username"/>
          <input onChange={(e)=>setEmail(e.target.value)} className="w-full px-4 py-2 border-[1px] border-black outline-0" type="text" placeholder="Enter your Email"/>
          <input onChange={(e)=>setPassword(e.target.value)} className="w-full px-4 py-2 border-[1px] border-black outline-0" type="password" placeholder="Enter your Password"/>
          <button onClick={handleRegister} className="w-full px-4 py-4 text-lg font-bold text-white bg-pink rounded-lg hover:bg-black hover:text-white">REGISTER</button>
          {error && <h3 className="text-red text-sm">Something went wrong</h3>}
          <div className="flex justify-center items-center space-x-4">
            <p>Already have an Account?</p>
            <p className="text-grey hover:text-black"><Link to="/Login">Login</Link></p>
          </div>
        </div>
      </div>
      </>
    )
  }
  
  export default Register