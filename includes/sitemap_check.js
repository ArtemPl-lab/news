var needle = require('needle');

const News = require('../models/News')
const SitemapParser = require('./SitemapParser');
const PageParser = require('./HtmlPageParser');

let getAndParsePage = async (pageParserObj, link) => {
    let { body: htmlPage } = await needle("get", link);
    return pageParserObj.startParse(htmlPage);
}

function sitemapCheck(sitemapLink, regularTitle, regularContent) {

    let sitemapParser = new SitemapParser(sitemapLink, console.log);

    let pageParser = new PageParser({
        title: regularTitle,
        body: regularContent,
        img: 'img'
    });

<<<<<<< HEAD
    let getAndParsePage = async link => {
        let { body: htmlPage } = await needle("get", link);
        return pageParser.startParse(htmlPage);
    }

    async function startParsing(){
        let sitemapLinks = await sitemapParser.startParse();
        for(let i = 0; i < sitemapLinks.length; i++){
            if (!News.find({ newsUrl : sitemapLinks[i] })) {
                let pageContent = await getAndParsePage(sitemapLinks[i]);

                let now = new Date

                let news = new News ({
                    _id: new mongoose.Types.ObjectId(),
                    newsTitle : pageContent.title,
                    newsContent : pageContent.body,
                    newsUrl : sitemapLinks[i],
                    now,
                    resource_id : id
                })

                await news.save()
            }
            
        }
    }
    startParsing();
}
=======
    

    let sitemapLinks = sitemapParser.startParse();  
    
    return { sitemapLinks, pageParser }
}

module.exports = sitemapCheck, getAndParsePage
>>>>>>> 60a1d7e45f38b79e85dbb59789763198eb79dbd7
