const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

const chef = require('./data/chef.json')
const recipies = require("./data/recipies.json")

app.use(cors())

app.get("/", (req, res) => {
    res.send("server is running");
})
app.get("/chef", (req, res) => {
    res.send(chef);
})

app.get("/recipies" , (req,res)=> {
    res.send(recipies);
})

app.get("/chef/:id" , (req , res ) => {
    const id = req.params.id;
    const selectedRecipies = recipies.filter(n => n.category_id === id)
    res.send(selectedRecipies)
})

app.get("/recipie/:id", (req,res)=>{
    const id = req.params.id;
    const recipiDetails = recipies.find(r => r._id === id)
    res.send(recipiDetails)
})

app.listen(port , ()=>{
    console.log('server is running')
})
