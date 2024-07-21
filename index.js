const express = require("express");
const router = require("./routes/TodoRoute");
const cors = require("cors");
const app = express();
const PORT = process.env.port || 5000
app.use(express.json())
app.use(cors())
app.use(router)

const mongoose = require("mongoose");

require("dotenv").config()
mongoose.connect(process.env.MongoDb_URL)
.then(()=>{console.log("Connected to mongodb")})
.catch((err)=>{console.log(err)})
    
app.listen(PORT,()=>{
   console.log( `Listening on: ${PORT}`)
});