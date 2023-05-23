const express = require('express');
const app = express();
const authRouter = require('./router/Router')
const dotenv = require("dotenv");
const dbconnection = require("./config/db")
dotenv.config();
dbconnection()

app.use(express.json())
app.use('/api/v1/auth',authRouter)

const port = process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`App is listening on post ${port}`)
})