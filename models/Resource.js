const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
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
    },
    links: [{ type: Types.ObjectId, ref: "News" }]
})

module.exports = model('Resource', schema)