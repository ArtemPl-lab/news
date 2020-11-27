const mongoose = require('mongoose')
const Resource = require("./models/Resource.js")
const parseIntoBd = require("./includes/parseIntoBd.js")
const config = require('config')

mongoose.connect(config.get("mongoUri"), {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
})

Resource.find({}, function(err, res) {
    if (err) return console.log(err)
    
    console.log(res)

    for (resource in res) {
        setInterval(function() {
            parseIntoBd(resource.sitemapLink, resource.regularTitle, resource.regularContent, resource._id)
        }, 60000 * resource.checkingPeriod)  

        
    }
})