const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const port = process.env.PORT || 5000;
//const Router = require('./routes/Voter-router')
const app = express()
app.use(cors())
app.use(express.json());
const uri=process.env.ATLAS_URI;
mongoose.set('strictQuery','true')
mongoose.connect("mongodb://127.0.0.1:27017/VotingSystem");
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB Database Connection Established Successfully");
})
const voteridrouter=require('./routes/voterid-routes');
app.use('/voterid',voteridrouter);
app.listen(port, () => console.log(`Server running on port ${port}`))