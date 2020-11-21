const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    _id: Schema.Types.ObjectId,
    regularTitle : {
        type : String, 
        
    },
    sitemapLink : {
        type : String,
        
    },
    regularContent : {
        type : String,
    },
    siteTitle : {
        type : String
    }
})

module.exports = model('Resource', schema)