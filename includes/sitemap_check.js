const Resource = require('../models/Resource')
const News = require('../models/News')
const {cyrillicToTranslit} = require('cyrillic-to-translit-js')
const cheerio = require('cheerio')
const axios = require('axios')
const { response } = require('express')

function sitemapCheck(sitemapLink) {
    try {
        const resource = await Resource.find({sitemapLink: sitemapLink})

        let sitemapLinks

        axios.get(sitemapLink)
            .then(response => {
                sitemapLinks = response.data
            })
            .catch(error => {
                console.log(error)
            })

        sitemapLinks = str.matchAll(/<loc>/g)

        sitemapLinks = Array.from(sitemapLinks);

        for (let i = 0; i < length(sitemapLinks); i++) {
            if (!News.find({ newsUrl: sitemapLinks[i] })) {
                
            }
        }

        // const newsObj = await News.find({resource: resource._id})

        // for (let news in newsObj) {

        // }

    } catch (e) {
        console.log(e);
    }
}