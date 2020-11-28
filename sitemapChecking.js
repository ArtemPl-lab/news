const mongoose = require('mongoose')
const parseIntoBd = require("./includes/parseIntoBd.js")
const config = require('config')

mongoose.connect(config.get("mongoUri"), {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
})

const Resource = require("./models/Resource")

async function startDaemon() {

let resource = await Resource.find({checkingPeriod : {$ne : 0}})

        for (let i = 0; i < resource.length; i++) {
            setInterval(function() {
                try {
                    parseIntoBd(resource[i])
                }
                catch(e) {
                    console.log(e);
                }
            }, 60000 * resource[i].checkingPeriod)  
        }

    }

    startDaemon()