import express from "express";

const app =  express();

app.get("/",(req,res)=>{
    res.json({"hello":"from server"})
})
app.listen("4000",()=>{
    console.log("Server is litneing in 3000");
})