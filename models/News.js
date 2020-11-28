const {Schema, model, Types} = require('mongoose')

const news = new Schema({
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
        type : String
    },
    tabTitle : {
        type : String
    },
    tabDesc : {
        type : String
    },
    longDesc : {
        type : String
    },
    visible : {
        type : Boolean
    },
    pinned : {
        type : Boolean
    }
    // resource: [{ type: Types.ObjectId, ref: "Resource" }]
})

module.exports = model('News', news)