const Resource = require('../models/Resource')
const News = require('../models/News')
const axios = require('axios')

function sitemapCheck(sitemapLink) {
    try {
        const resource = await Resource.find({sitemapLink: sitemapLink})

        let sitemapLinks

        axios.get(sitemapLink)
            .then(response => {
                sitemapLinks = response.data
            })
            .catch(error => {
                console.log(error)
            })

        sitemapLinks = str.matchAll(/<loc>(.*?)<\/loc>/g)

        sitemapLinks = Array.from(sitemapLinks);

        for (let i = 0; i < length(sitemapLinks); i++) {
            if (!News.find({ newsUrl: sitemapLinks[i] })) {
                
                axios.get(sitemapLink)
                .then(response => {
                    siteHtml = response.data
                })
                .catch(error => {
                    console.log(error)
                })

                const newsTitle = str.match(/<title>(.*?)<\/title>/)
                const newsContent = str.match(/<body>(.*?)<\/body>/)
                const newsUrl = sitemapLinks[i]
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