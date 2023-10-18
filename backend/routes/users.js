const express=require('express')
const router=express.Router()
const User=require('../models/User')
const dotenv=require('dotenv')
const bcrypt=require('bcrypt')
const Note=require('../models/Note')
const verifyToken = require('../verifyToken')

//GET USER
router.get("/:id",async (req,res)=>{
    try{
        const user=await User.findById(req.params.id)
        const {password,...info}=user._doc
        res.status(200).json(info)
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports=router