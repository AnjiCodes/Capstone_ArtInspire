const express=require('express')
const { default: mongoose } = require('mongoose')
const app=express()
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
        await mongoose.connect("mongodb+srv://anjalimahida25:artinspire@cluster0.pbbsyei.mongodb.net/?retryWrites=true&w=majority")
        console.log("database is connected successfully!")
    }
    catch(err){

    }
}

//middlewares
dotenv.config()
app.use(express.json())
app.use(cookieParser())
app.use(cors({origin:"http://localhost:5183"}))
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/notes",noteRoute)


app.listen(3000,()=>{
    connectDB()
    console.log("app is running on port 3000")
})