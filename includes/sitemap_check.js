var needle = require('needle');

const SitemapParser = require('./SitemapParser');
const PageParser = require('./HtmlPageParser');

let sitemapParser = new SitemapParser('https://www.forbes.ru/sitemap.xml', console.log);

let pageParser = new PageParser({
    title: 'h1.title',
    body: '.all-body',
    img: 'img'
});

const getAndParsePage = async link => {
    let { body: htmlPage } = await needle("get", link);
    return pageParser.startParse(htmlPage);
}

async function startParsing(){
    let sitemapLinks = await sitemapParser.startParse();
    for(let i = 0; i < sitemapLinks.length; i++){
        console.log(`Страница ${i} из ${sitemapLinks.length}`);
        let pageContent = await getAndParsePage(sitemapLinks[i]);
        console.log(pageContent);
    }
}

// startParsing();