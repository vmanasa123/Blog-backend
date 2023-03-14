const express=require('express')
const hollywood=require("./Routes/Hollywood");
const bollywood=require("./Routes/Bollywood")
const food=require("./Routes/Food");
const technology=require("./Routes/technology")
const fitness=require("./Routes/Fitness")
const home=require('./Routes/Home')


const app=express();
const cors = require('cors')

app.use('/',home)
app.use('/',hollywood);
app.use('/',bollywood)
app.use('/',food)
app.use('/',fitness)
app.use('/',technology)


app.listen(3001,(req,res)=>{
    console.log("app is running on localhost:3001")
})

