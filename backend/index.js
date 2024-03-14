const mongoose=require("mongoose");
const express = require("express")
const cors = require("cors")
const UserModel =require("./models/Users")
const dotenv = require('dotenv')

const app=express()
app.use(cors())
app.use(express.json())
dotenv.config()
mongoose.connect(process.env.Mongo_URL)

app.post("/login",(req,res) =>{
    const{email,password}=req.body
    UserModel.findOne({email:email})
    .then(user => {
        if(user.email===user.email){
            if(user.password===password){
                res.json("Success")
            }else{
              res.json("Password is incorrect")  
            }
        } else{
            res.json("No record existed")
        }
    })
})

app.post('/register',(req,res) =>{
    UserModel.create(req.body)
    .then(form => res.json(form))
    .catch(err => res.json(err))
})


app.listen('3001',() =>{
    console.log("backend running")
    console.log("Mongodb is connected")
})

