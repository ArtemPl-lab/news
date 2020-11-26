const Resource = require('./models/Resource')
const { sitemapCheck } = require("./includes/sitemap_check.js")

setTimeout(function() {
    let resources = Resource.find()
}, 60000*60000)

for (resource in resources) {
    if (resource.checkingPeriod) {
        setInterval(function() {
            sitemapCheck(resource.sitemapLink, resource.regularTitle, resource.regularContent, resource.checkingPeriod, resource._id)
        }, 60000 * resource.checkingPeriod)
       
    }
    
}