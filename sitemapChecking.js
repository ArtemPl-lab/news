const Resource = require('./models/Resource')
const { sitemapCheck } = require("./includes/sitemap_check.js")

let resources = Resource.find()
for (resource in resources) {
    if (resource.checkingPeriod) {
        setInterval(function() {
            sitemapCheck(resource.sitemapLink, resource.regularTitle, resource.regularContent, resource.checkingPeriod, resource._id)
        }, 60000 * resource.checkingPeriod)
       
    }
    
}