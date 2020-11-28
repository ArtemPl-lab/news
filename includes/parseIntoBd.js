const mongoose = require("mongoose")
const News = require("../models/News")
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
            // console.log(sitemapLinksElement);
            try {
                let pageContent = await getAndParsePage(pageParser, sitemapLinksElement);

                if(pageContent.title){
                    // console.log(pageContent);

                    let now = String(new Date)
            
                    let news = new News ({
                        _id: new mongoose.Types.ObjectId(),
                        newsTitle : pageContent.title,
                        newsContent : pageContent.body,
                        newsUrl : sitemapLinksElement,
                        now : now,
                        resource_id : resource.id
                    })
                    await news.save()
                }
            }
            catch(e) {
                console.log(e);
            }
        }
        else{
            // console.log("Есть в бд");
        }
    }
}
module.exports = parseIntoBd;