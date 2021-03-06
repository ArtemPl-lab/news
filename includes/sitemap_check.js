var needle = require('needle');

const SitemapParser = require('./SitemapParser');
const PageParser = require('./HtmlPageParser');

let getAndParsePage = async (pageParserObj, link) => {
    try {
        let { body: htmlPage }  = await needle("get", link);
        return pageParserObj.startParse(htmlPage);
    } catch (e) {
        console.log(e);
    }
}

async function sitemapCheck(sitemapLink, regularTitle, regularContent) {

    try {
        let sitemapParser = new SitemapParser(sitemapLink, console.log);

    let pageParser = new PageParser({
        title: regularTitle,
        body: regularContent,
        img : "img"
    });
    

    let sitemapLinks = await sitemapParser.startParse();  

    
    
    return { sitemapLinks, pageParser }
    } 
    catch(e) {
        console.log(e);
    }
}

module.exports = { sitemapCheck, getAndParsePage }
