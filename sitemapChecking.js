const parseIntoBd = require("./includes/parseIntoBd.js")
const Resource = require("./models/Resource")

async function startDaemon() {
try {
    Resource.find({checkingPeriod : {$ne : 0}}, (err, resource) => {
        console.log(resource);
        if (err) return console.log(err);
        for (let i = 0; i < resource.length; i++) {
    
            setInterval(function() {
            parseIntoBd(resource[i])
            }, 1000 * resource[i].checkingPeriod);
        
        }
    })
    
} catch (e) {
    console.log(e);
}
    
}
module.exports = startDaemon;