const {Schema, model} = require('mongoose')

const schema = new Schema({
    newsTitle : {
        type : String,
        required : true
    },
    newsContent : {
        type : String
    },
    newsUrl : {
        type : String
    }
})

module.exports = model('News', schema)