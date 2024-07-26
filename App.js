const express=require('express');
const mongoose = require('mongoose');
const cors=require('cors');

const alienrouter=require('./routes/aliens.js');
const url ="mongodb+srv://miniproject1729:HYB5wx96QHQSwrDk@cluster0.ylskpxa.mongodb.net/?retryWrites=true&w=majority";

const app=express();
mongoose.connect(url);

const con =mongoose.connection

con.on('open',()=>{
    console.log("connected");
})

app.use(cors())

app.use(express.json());



const alienRouter=require('./routes/aliens.js');
app.use('/aliens',alienRouter);
app.listen(9000,()=>{
    console.log("server started")
})