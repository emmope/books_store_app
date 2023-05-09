const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type: String
    },
    email:{
        type: String
    },
    role:{
        type: String,
        enum:['user', 'admin'],
        default: 'user'
    },
    
    phoneNumber: Number,
    gender: {
        type: String
    },
    occupation: {
        type: String
    },
    date: { type: Date, default: Date.now },
  });

  const Users = mongoose.model('users', UserSchema);


module.exports =  Users



console.log("%j", Users)