const mongoose = require('mongoose')

const dbconnection = async() =>{
    try{
        let conn =await mongoose.connect(process.env.Mongo_Url)
        console.log("db connected")
    }catch(error){
        console.log("db connection faill")
    }
}

module.exports = dbconnection;