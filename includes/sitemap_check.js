const Resource = require('../models/Resource')
const News = require('../models/News')
const axios = require('axios')
const {cyrillicToTranslit} = require('cyrillic-to-translit-js')

async function sitemapCheck(sitemapLink) {
    try {
        const resource = Resource.find({sitemapLink: sitemapLink});
        let { data } = await axios.get(sitemapLink);
        let sitemapLinks = [...data.matchAll(/<loc>(.*?)<\/loc>/g)];
        sitemapLinks.map(async link => {
            let { data: siteHtml } = await axios.get(link[1]);
            console.log(siteHtml);
        });
    } catch (e) {
        console.log(e);
    }
}

sitemapCheck("https://www.forbes.ru/sitemap.xml?page=154");