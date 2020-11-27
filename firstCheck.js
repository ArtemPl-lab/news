

var WebSocketServer = require('websocket').server;
var http = require('http');
var needle = require('needle');
const cyrillicToTranslit = require('cyrillic-to-translit-js');
const mongoose = require('mongoose')
const config = require('config')

const News = require('./models/News');
const SitemapParser = require('./includes/SitemapParser');
const PageParser = require('./includes/HtmlPageParser');


mongoose.connect(config.get("mongoUri"), {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
})
var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});
let connections = [];
const stepCallback = (logger) => {
    
    connections.map(connection => {
        connection.sendUTF(JSON.stringify({
            title: "Парсинг sitemap",
            desc: `Текущая страница: ${logger.currentPage} / Найдено страниц сайта: ${logger.pagesFound}`,
            type: "warning"
        }));
    });
};

let getAndParsePage = async (link, pageParser) => {
    let { body: htmlPage } = await needle("get", link);
    return pageParser.startParse(htmlPage);
}


async function firstCheck(sitemapLink, selectors, resourse){
    const sitemapParser = new SitemapParser(sitemapLink, stepCallback);
    const pageParser = new PageParser(selectors);

    server.listen(5001);
    wsServer = new WebSocketServer({
        httpServer: server,
        autoAcceptConnections: false
    });
    wsServer.on('request', async function(request) {
        var connection = request.accept('echo-protocol');
        connections.push(connection);
    });
    const sitemap = await sitemapParser.startParse();
    for(let link of sitemap){
        const news = await getAndParsePage(link, pageParser);

        if(news.title){
            const newsUrl = cyrillicToTranslit().transform(news.title.toLowerCase(),"-");
            const page = new News({
                _id: new mongoose.Types.ObjectId(),
                newsTitle: news.title,
                newsContent: news.content,
                newsUrl,
                added_at: String(new Date),
                tabTitle: news.title,
                tabDesc: news.content.slice(0, 100)+"...",
                longDesc: news.content.slice(0, 300)+"...",
            });
            await page.save();
        }
    }
}

firstCheck('https://www.forbes.ru/sitemap.xml?page=154', {
    title: 'h1',
    content: '.article__content'
});
// module.exports = firstCheck;