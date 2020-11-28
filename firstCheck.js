
const needle = require('needle');
const cyrillicToTranslit = require('cyrillic-to-translit-js');
const mongoose = require('mongoose')
const News = require('./models/News');
const SitemapParser = require('./includes/SitemapParser');
const PageParser = require('./includes/HtmlPageParser');

const getAndParsePage = async (link, pageParser) => {
    let { body: htmlPage } = await needle("get", link);
    return pageParser.startParse(htmlPage);
}
const stepCallback = (logger) => {
    global.sendMessage({
        title: "Парсинг sitemap",
        desc: `Текущая страница sitemap: ${logger.currentPage} / Найдено страниц сайта: ${logger.pagesFound}`,
        type: "warning"
    });
};
async function firstCheck(sitemapLink, selectors, resourse){
    const sitemapParser = new SitemapParser(sitemapLink, stepCallback);
    const pageParser = new PageParser(selectors);
    const sitemap = await sitemapParser.startParse();
    let succesCounter = 0;
    for(let i = 0; i < sitemap.length; i++){
        const news = await getAndParsePage(sitemap[i], pageParser);
        global.sendMessage({
            title: "Получение контента страниц",
            desc: `Обход страницы ${i+1} из ${sitemap.length}`,
            type: "warning"
        });
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
                visible : true,
                pinned : false
            });
            await page.save();
            succesCounter++;
        }
    }
    global.sendMessage({
        title: "Обход успешно завершён",
        desc: `Получено страниц ${succesCounter} из ${sitemap.length}`,
        type: "success"
    });
}

// firstCheck('https://www.beboss.ru/sitemap.xml', {
//     title: 'title',
//     content: '.article__content'
// });
module.exports = firstCheck;