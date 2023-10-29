import Notes from "../components/Notes"
import axios from "axios"
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { URL } from '../url'
import { UserContext } from "../context/UserContext"





const MySpace = () => {

const [notes,setNotes]=useState([])
// const {user}=useContext(UserContext)

  const fetchNotes=async()=>{
    try{
      const res=await axios.get(URL+"/api/notes/")
      // console.log(res.data)
      setNotes(res.data)
    }
    catch(err){
      console.log(err)
    }
  }

    useEffect(()=>{
      fetchNotes()

    },[])


    return (
      <>
      <div className="px-8 md:px-[200px]">
      {notes.map((note) => (
  <Link key={note._id} to={`/notes/note/${note._id}`}>
    <Notes note={note} />
  </Link>
))}

      <div className="flex pt-6 flex-col space-y-2">
      <button className="bg-pink w-full md:w-[20%] mx-auto text-white rounded-lg  gont-semibold px-4 py-2 text-lg"><Link to="/write"> Create Note</Link></button>
      <button className="sbg-pink w-full md:w-[20%] mx-auto text-white rounded-lg  gont-semibold px-4 py-2 text-lg"><Link to="/notes">Go Back</Link></button>
      </div>
    </div>
    </>
    )
  }
  
  export default MySpace