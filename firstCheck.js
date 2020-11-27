var WebSocketServer = require('websocket').server;
var http = require('http');
var needle = require('needle');

const SitemapParser = require('./includes/SitemapParser');
const PageParser = require('./includes/HtmlPageParser');

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


async function firstCheck(sitemapLink, selectors){
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
        console.log(await getAndParsePage(link, pageParser));
    }
}

firstCheck('https://www.forbes.ru/sitemap.xml?page=154', {
    title: 'h1',
    content: '.article__content'
});
// module.exports = firstCheck;