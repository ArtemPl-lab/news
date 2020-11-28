var needle = require('needle');

const SitemapParser = require('./SitemapParser');
const PageParser = require('./HtmlPageParser');

let getAndParsePage = async (pageParserObj, link) => {
    let { body: htmlPage } = await needle("get", link);
    return pageParserObj.startParse(htmlPage);
}

async function sitemapCheck(sitemapLink, regularTitle, regularContent) {

    let sitemapParser = new SitemapParser(sitemapLink, console.log);

    let pageParser = new PageParser({
        title: regularTitle,
        body: regularContent,
        img: 'img'
    });

    

    let sitemapLinks = await sitemapParser.startParse();  
    
    return { sitemapLinks, pageParser }
}

module.exports = sitemapCheck, getAndParsePage
