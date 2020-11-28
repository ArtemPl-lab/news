const getAndParsePage  = require("./sitemap_check.js")
const sitemapCheck = require("./sitemap_check.js")
const mongoose = require("mongoose")
const News = require("../models/News")

async function parseIntoBd(resource) {

    let  { sitemapLinks, pageParser } = await sitemapCheck(resource.sitemapLink, resource.regularTitle, resource.regularContent)

    for (sitemapLinksElement in sitemapLinks) {
        if (!News.find({ newsUrl : sitemapLinksElement })) {
            try {
                let pageContent = await getAndParsePage(pageParser, sitemapLinksElement);
        
                let now = String(new Date)
        
                let news = new News ({
                    _id: new mongoose.Types.ObjectId(),
                    newsTitle : pageContent.title,
                    newsContent : pageContent.body,
                    newsUrl : sitemapLinksElement,
                    now,
                    resource_id : resource.id
                })

                
        
            await news.save()
        }
        catch(e) {
            console.log(e);
        }
        }
    }
}

module.exports = parseIntoBd;