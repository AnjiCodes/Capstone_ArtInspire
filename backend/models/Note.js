const mongoose=require('mongoose')

const NoteSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true,
        unique:true
    },    
    username:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:true,
    },

},{timestamps:true})

module.exports=mongoose.model("Note", NoteSchema)