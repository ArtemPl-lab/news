const parseIntoBd = require("./includes/parseIntoBd.js")
const Resource = require("./models/Resource")

async function startDaemon() {

    let resource = await Resource.find({checkingPeriod : {$ne : 0}})
    console.log(resource);
    for (let i = 0; i < resource.length; i++) {
        setInterval(function() {
            parseIntoBd(resource[i])
        }, 1000 * resource[i].checkingPeriod);
    }
}
module.exports = startDaemon;