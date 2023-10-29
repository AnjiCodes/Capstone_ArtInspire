import { useEffect, useState } from "react";
import {BiEdit} from 'react-icons/bi';
import {MdDelete} from 'react-icons/md';
// import { Link, useParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import { URL } from "../url";
import { Link } from "react-router-dom";
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom'
import { useContext } from "react";

const NoteDetails = () => {

    const noteId=useParams().id
    const [note,setNote]=useState({})
    const navigate=useNavigate()

    const fetchNote=async() =>{
        try{
            const res= await axios.get(URL+"/api/notes/"+noteId)
            // console.log(res.data)
            setNote(res.data)
        }
        catch(err){
            console.log(err)
        }
    }

    const handleDeleteNote=async()=>{
        try{
            const res=await axios.delete(URL+"/api/notes/"+noteId)
            console.log(res.data)
            navigate("/notes")
        }
        catch(err){

        }
    }


    useEffect(()=>{
        fetchNote()
    })

    return (
        <div>
            <div className="px-8 md:px-[200px] mt-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-black md:text-3xl">{note.title}</h1>
                    <div className="flex items-center justify-center space-x-2">
                        <p className="cursor-pointer" onClick={()=>navigate("/edit/"+noteId)} ><BiEdit/></p>
                        <p className="cursor-pointer" onClick={handleDeleteNote}><MdDelete/></p>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-2 md:mt-4">
                    <p>@{note.username}</p>
                    <div className="flex space-x-2">
                    <p>{new Date(note.updatedAt).toString().slice(0,15)}</p>
                    <p>{new Date(note.updatedAt).toString().slice(16,24)}</p>
                    </div>
                </div>
                <p className="mx-auto mt-8">{note.desc}</p>
                <div className="flex items-center mt-8 space-x-4 font-semibold">
                    <p>Categories:</p>
                    <div className="flex justify-center items-center space-x-2">
                        <div className="bg-pink rounded-lg px-3 py-1">Doodle</div>
                        <div className="bg-pink rounded-lg px-3 py-1">Crafts</div>
                        <div className="bg-pink rounded-lg px-3 py-1">DIY</div>

                    </div>
                    <button className="bg-pink w-full md:w-[20%] mx-auto text-white rounded-lg  gont-semibold px-4 py-2 text-lg"><Link to="/notes">Go Back</Link></button>
                </div>
            </div>
        </div>
      )
  }
  
  export default NoteDetails