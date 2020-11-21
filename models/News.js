const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    _id: Schema.Types.ObjectId,
    newsTitle : {
        type : String,
        required : true
    },
    newsContent : {
        type : String
    },
    newsUrl : {
        type : String
    },
    added_at : {
        type : Date
    },
    resource: [{ type: Types.ObjectId, ref: "Resource" }]
})

module.exports = model('News', schema)