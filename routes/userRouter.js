const mongoose=require('mongoose');
const express=require('express');

const userRouter=express.Router()
userRouter.get("/",(req,res)=>{
    res.status(200).send("Successfully get data");
})
userRouter.post("/user",(req,res)=>{
    res.status(200).send("Successfully post data");
})

module.exports={
    userRouter
}