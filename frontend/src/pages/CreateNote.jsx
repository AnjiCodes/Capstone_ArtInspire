import { useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from '../context/UserContext'
import { useContext } from 'react'
import axios from 'axios'
import { URL } from '../url'
import { Navigate, useNavigate } from 'react-router-dom'





const CreateNote = () => {

    const [title,setTitle]=useState("")
    const [desc,setDesc]=useState("")
    const {user}=useContext(UserContext)
    const navigate=useNavigate()



    const handleCreate=async(e)=>{
        e.preventDefault()
        const note={
            title,
            desc,
            username:user.username,
            userId:user._id
        }

        //note upload
        try{
            const res=await axios.post(URL+"/api/notes/create",note,{withCredentials:true})
            navigate("/notes/note/"+res.data._id)
            // console.log(res.data)
            
        }
        catch(err){
            console.log(err)
        }
        
    }

    return (
        <div className="px-6 md:px-[200px] mt-8">
            <h1 className="font-bold md:text-2xl text-xl mt-8">Create a Note</h1>
            <form className="w-full flex-flex-col space-y-4 md:space-y-8">
                <input onChange={(e)=>setTitle(e.target.value)}  value={title}  type="text" placeholder="Enter Note Title" className="px-4 py-2 outline-none"></input>
                <div className='flex flex-col space-y-4 '>
                    <textarea onChange={(e)=>setDesc(e.target.value)} rows={10} cols={10}   value={desc}  className="px-4 py-2 border-[1px] caret-pink outline-none" placeholder="Enter Note Description"> </textarea>
                    <button onClick={handleCreate} className="bg-pink w-full md:w-[20%] mx-auto rounded-lg  text-white gont-semibold px-4 py-2 text-lg">Create</button>
                    <button className="bg-pink w-full md:w-[20%] mx-auto text-white gont-semibold rounded-lg  px-4 py-2 text-lg"><Link to="/notes">Go Back</Link></button>
                </div>
            </form>
        </div>
      )
  }
  
  export default CreateNote