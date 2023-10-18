const express=require('express')
const router=express.Router()
const User=require('../models/User')
const bcrypt=require('bcrypt')
const Note=require('../models/Note')
// const verifyToken = require('../verifyToken')


//CREATE
router.post("/create",async (req,res)=>{
    try{
        const newNote=new Note(req.body)
        // console.log(req.body)
        const savedNote=await newNote.save()
        
        res.status(200).json(savedNote)
    }
    catch(err){
        
        res.status(500).json(err)
    }
     
})


//UPDATE
router.put("/:id",async (req,res)=>{
    try{
       
        const updatedNote=await Note.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedNote)

    }
    catch(err){
        res.status(500).json(err)
    }
})


//DELETE
router.delete("/:id",async (req,res)=>{
    try{
        await Note.findByIdAndDelete(req.params.id)
        res.status(200).json("Note has been deleted!")
    }
    catch(err){
        res.status(500).json(err)
    }
})


//GET NOTE DETAILS
router.get("/:id",async (req,res)=>{
    try{
        const note=await Note.findById(req.params.id)
        res.status(200).json(note)
    }
    catch(err){
        res.status(500).json(err)
    }
})

// //GET POSTS
// router.get("/",async (req,res)=>{
//     const query=req.query
    
//     try{
//         const searchFilter={
//             title:{$regex:query.search, $options:"i"}
//         }
//         const posts=await Post.find(query.search?searchFilter:null)
//         res.status(200).json(posts)
//     }
//     catch(err){
//         res.status(500).json(err)
//     }
// })

//GET USER POSTS
router.get("/user/:userId",async (req,res)=>{
    try{
        const notes=await Note.find({userId:req.params.userId})
        res.status(200).json(notes)
    }
    catch(err){
        res.status(500).json(err)
    }
})


module.exports=router