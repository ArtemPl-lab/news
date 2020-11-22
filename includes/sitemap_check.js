const Resource = require('../models/Resource')
const News = require('../models/News')
const axios = require('axios')
const {cyrillicToTranslit} = require('cyrillic-to-translit-js')

function sitemapCheck(sitemapLink) {
    try {
        const resource = Resource.find({sitemapLink: sitemapLink})

        let sitemapLinks = await axios.get(sitemapLink)        

        sitemapLinks = sitemapLinks.matchAll(/<loc>(.*?)<\/loc>/g)

        sitemapLinks = Array.from(sitemapLinks);

        for (let i = 0; i < length(sitemapLinks); i++) {
            if (!News.find({ newsUrl: sitemapLinks[i] })) {
                
                let siteHtml = axios.get(sitemapLink)
                
                const newsTitle = siteHtml.match(/<title>(.*?)<\/title>/)
                const newsContent = siteHtml.match(/<body>(.*?)<\/body>/)
                const newsUrl = cyrillicToTranslit().transform(newsTitle.toLowerCase(),"-") 
                const now = new Date

                const news = new News({
                    _id: new mongoose.Types.ObjectId(),
                    newsTitle: newsTitle[1],
                    newsContent: newsContent[1],
                    newsUrl,
                    now,
                    resource: resource._id
                })

                await news.save()
            }
        }

        // const newsObj = await News.find({resource: resource._id})

        // for (let news in newsObj) {

        // }

    } catch (e) {
        console.log(e);
    }
}