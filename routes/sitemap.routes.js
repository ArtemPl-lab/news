const {Router} = require('express')
const router = Router()
const News = require('../models/News')
const mongoose = require('mongoose')
const Resource = require('../models/Resource')

module.exports = router;


//Генерация sitemap

//sitemap

router.get('/sitemap.xml', async (req, res) => {
try {
res.header('Content-Type', 'application/xml');

let body = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">

<url>
<loc>https://newsbizness.ru/</loc>
</url>
`

let news = await News.find({});

for (let i = 0; i < news.length; i++) {
body += `<url>
<loc>https://newsbizness.ru/postPage/${news[i].newsUrl}</loc>
</url>`
}

body += `</urlset>`

res.send(body)

} catch (e) {
console.log(e);
}
})