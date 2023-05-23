const mongoose = require('mongoose')
const userModel = require('../models/UserModel')

const registerController = async(req,res) =>{    
    try {
        const {name, email, password} = req.body;
        if(!name){
            return res.send({message: "user name required"})
        }
        if(!email){
            return res.send({message: "email is required"})
        }
        if(!password){
            return res.send({message: "password is required"})
        }
        

        // checking whether user record is already available or not ?
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.status(200).send({
                success: true,
                message: "user already exists"
            })
        }
        // replacing original password with hashed password in DB
        // let updatedPassword = await hashPassword(password)
        const user = await new userModel({name, email, password}).save();

        res.status(201).send({
            success: true,
            message: "user created successfully",
            user
        })
    
    } catch (error) {
        console.log(error.message)
        res.status(500).send({
            success: false,
            message: "Error in Registration",
            error
        })

    }

}
module.exports = registerController