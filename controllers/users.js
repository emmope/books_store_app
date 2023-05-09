const crypto = require('crypto')
const Users = require('../models/users')

//home, createUser, findUser, findAllUser, updateUser, deleteUser

function home(req, res){
    res.send('You are viewing our homepage')
    }


    const createUser = async(req, res)=>{
        const users =  await Users.create(req.body)

    res.json(users) 
    }


    const  findUser = async(req,res)=>{

        const id = req.params.id
       const  users = await Users.find({_id:id})
       if(!users){
        res.status(404).json({
            message: "No user found"
        })
       }
       res.json(users)
    
    }

    const findAllUser = async (req, res)=>{
        const users = await Users.find()
        res.send(users)
    }


    const updateUser = async(req,res)=>{
        const id = req.params.id
        const users = await Users.findOne({_id:id})
       const data = await users.updateOne({...req.body})
        res.status(200).json({
            message: "Account has been updated", 
            user: data
        })
        

    }
    
    const deleteUser = async (req, res)=>{

        const id = req.params.id
        const users = await Users.deleteOne({_id:id})
        res.status(200).json({
            message: "User updated succesfully"
        })
        res.json(users)
    }
    

    module.exports = { home, createUser, findUser, findAllUser, updateUser, deleteUser }