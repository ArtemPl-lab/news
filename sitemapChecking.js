const mongoose = require('mongoose')
const parseIntoBd = require("./includes/parseIntoBd.js")
const config = require('config')

mongoose.connect(config.get("mongoUri"), {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
})

const Resource = require("./models/Resource")

Resource.find({checkingPeriod : {$ne : 0}}, function(err, res) {
    if (err) return console.log(err)
    
    console.log(res)

    try {

        for (resource in res) {
            setInterval(function() {
                parseIntoBd(resource)
            }, 60000 * resource.checkingPeriod)  
        }
    }
    catch(e) {
        console.log(e);
    }
})