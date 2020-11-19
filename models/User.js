const {Schema, model} = require('mongoose')

const schema = new Schema({
    login : {
        type : String, 
        required : true
    },
    password : {
        type : String,
        required : true
    },
    email : {
        type : String,
    },
    role : {
        type : String
    }
})

module.exports = model('User', schema)