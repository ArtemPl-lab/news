const mongoose = require("mongoose")
const News = require("../models/News")
const cyrillicToTranslit = require('cyrillic-to-translit-js');
const SitemapParser = require('./SitemapParser');
const PageParser = require('./HtmlPageParser');
var needle = require('needle');
let getAndParsePage = async (pageParserObj, link) => {
    let { body: htmlPage }  = await needle("get", link);
    return pageParserObj.startParse(htmlPage);
}

async function parseIntoBd(resource) {
    let sitemapParser = new SitemapParser(resource.sitemapLink, console.log);
    let pageParser = new PageParser({
        title: resource.regularTitle,
        body: resource.regularContent
    });
    let sitemapLinks = await sitemapParser.startParse(); 
    for (let sitemapLinksElement of sitemapLinks) {
        if (!(await News.findOne({ newsUrl : sitemapLinksElement }))) {
            try {
                let pageContent = await getAndParsePage(pageParser, sitemapLinksElement);

                const newsUrl = cyrillicToTranslit().transform(news.title.toLowerCase(),"-");

                if(pageContent.title){

                    let now = String(new Date)
            
                    let news = new News ({
                        _id: new mongoose.Types.ObjectId(),
                        newsTitle : pageContent.title,
                        newsContent : pageContent.body,
                        newsUrl : newsUrl,
                        now : now,
                        tabTitle: pageContent.title,
                        tabDesc: pageContent.body.slice(0, 100)+"...",
                        longDesc: pageContent.body.slice(0, 300)+"...",
                        visible : true,
                        pinned : false,
                        resource_id : resource.id,
                        resourceUrl : sitemapLinksElement
                    })
                    await news.save()
                }
            }
            catch(e) {
                console.log(e);
            }
        }
    }
}
module.exports = parseIntoBd;