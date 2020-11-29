const {Schema, model} = require('mongoose')

const resources = new Schema({
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
    regularImg : {
        type : String
    },
    siteTitle : {
        type : String
    },
    checkingPeriod : {
        type : Number
    }
})

module.exports = model('Resource', resources)