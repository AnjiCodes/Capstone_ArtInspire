// import express, { json } from 'express'
// import { default as mongoose } from 'mongoose'
// import { config } from 'dotenv'
// import cors from 'cors'
// import path from 'path'
// import cookieParser from 'cookie-parser'
// import authRoute from './routes/auth'
// import userRoute from './routes/users'
// import noteRoute from './routes/notes'


const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cors=require('cors')
const path=require("path")
const cookieParser=require('cookie-parser')
const authRoute=require('./routes/auth')
const userRoute=require('./routes/users')
const noteRoute=require('./routes/notes')

// database
const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb+srv://anjalimahida25:artinspire@cluster0.pbbsyei.mongodb.net/testretryWrites=true&w=majority")
        console.log("database is connected successfully!")
    }
    catch(err){
        console.log("DB error", err)
    }
}

// const corsOpts = {
//     origin: '*',
//     credentials: true,
//     methods: ['GET','POST','HEAD','PUT','PATCH','DELETE'],
//     allowedHeaders: ['Content-Type'],
//     exposedHeaders: ['Content-Type']
// };

// app.use(cors(corsOpts));
//http://localhost:5173

//middlewares
dotenv.config()
app.use(express.json())
app.use(cookieParser())
// app.use(cors({
//     origin: '*',
//   }));
app.use(cors({origin:"http://localhost:5173",credentials:true}))
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/notes",noteRoute)


app.listen(3000,()=>{
    connectDB()
    console.log("app is running on port 3000")
})