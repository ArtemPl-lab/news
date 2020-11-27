const getAndParsePage  = require("./sitemap_check.js")
const sitemapCheck = require("./sitemap_check.js")

function parseIntoBd(sitemapLink, regularTitle, regularContent, id) {

    let { sitemapLinks, pageParser } = sitemapCheck(sitemapLink, regularTitle, regularContent)

    for (sitemapLinksElement in sitemapLinks) {
        if (!News.find({ newsUrl : sitemapLinksElement })) {
            let pageContent = getAndParsePage(sitemapLinksElement, pageParser);
    
            let now = new Date
    
            let news = new News ({
                _id: new mongoose.Types.ObjectId(),
                newsTitle : pageContent.title,
                newsContent : pageContent.body,
                newsUrl : sitemapLinksElement,
                now,
                resource_id : id
            })

            
    
           news.save()
        }
    }
}

module.exports = parseIntoBd;