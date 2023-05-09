const express = require('express')

const {createUser, findUser, findAllUser, updateUser, deleteUser} = require ('../controllers/users')

const route = express.Router()


route.post('/users',createUser) //create a user
route.get('/users/:id',findUser ) //get a user
route.get('/users',findAllUser)
route.patch('/users/:id',updateUser)
route.delete('/users/:id',deleteUser)

/*
1. create an endpoint to sign up a user
2. find a user
3. find all users   */

module.exports = route