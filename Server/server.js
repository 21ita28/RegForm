const express = require('express')
const DBConnect = require('./DBConnect')
const cors=require('cors')
const rout=require('./routing')
const app=express()
app.use(express.json())

app.use(cors())

DBConnect()


app.get('/details',rout.getdetails)
app.get('/reg/:id',rout.getregister)
app.post('/reg',rout.createregister)
app.put('/reg/:id',rout.updateregister)
app.delete('/reg/:id',rout.deleteregister)
app.listen(4000,()=>{
    console.log("SERVER STARTED!!!");
})